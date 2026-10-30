"""NanoBioMat — tracé pédagogique de positions de raies NIST.
Installer matplotlib : python -m pip install matplotlib
Placer spectra483.csv à côté de ce script.
Exemple : python spectres483.py Fe --min 245 --max 280 --output fer.png
Hauteurs uniformes : aucune simulation d'absorbance ou d'intensité.
"""
import argparse
import csv
from pathlib import Path
import matplotlib.pyplot as plt


def plot_lines(symbol='Fe', minimum=None, maximum=None, csv_path=None):
    path = Path(csv_path) if csv_path else Path(__file__).with_name('spectra483.csv')
    with path.open(encoding='utf-8') as stream:
        rows = [r for r in csv.DictReader(stream) if r['element'] == symbol]
    if not rows:
        raise ValueError(f'Aucune sélection intégrée pour {symbol}')
    wavelengths = [float(r['nm']) for r in rows]
    lo = min(wavelengths)-5 if minimum is None else minimum
    hi = max(wavelengths)+5 if maximum is None else maximum
    if not lo < hi:
        raise ValueError('La borne minimale doit être inférieure à la borne maximale.')
    visible = [w for w in wavelengths if lo <= w <= hi]
    fig, ax = plt.subplots(figsize=(10, 3.4), layout='constrained')
    ax.vlines(visible, 0, 1, color='#257b83', linewidth=2)
    ax.set(xlim=(lo, hi), ylim=(0, 1.2), xlabel='Longueur d’onde dans l’air / nm',
           title=f'{symbol} I — sélection NIST, hauteurs uniformes', yticks=[])
    ax.spines[['top', 'right', 'left']].set_visible(False)
    ax.text(.01, .96, f'{len(visible)} raies · ni intensité, ni absorbance', transform=ax.transAxes, va='top')
    return fig, rows


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('element', nargs='?', default='Fe')
    parser.add_argument('--min', type=float, dest='minimum')
    parser.add_argument('--max', type=float, dest='maximum')
    parser.add_argument('--output', default='spectre.png')
    args = parser.parse_args()
    figure, rows = plot_lines(args.element, args.minimum, args.maximum)
    figure.savefig(args.output, dpi=180)
    print(f'Figure : {args.output}\nSource : {rows[0]["source"]}')
