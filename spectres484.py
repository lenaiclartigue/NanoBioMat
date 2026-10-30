"""NanoBioMat : positions de raies du NIST Handbook (99 éléments).
Installer matplotlib et placer spectra484.csv à côté du script.
Exemple : python spectres484.py Fe --stage II --medium air --min 200 --max 400
Hauteurs uniformes : aucune simulation d'absorbance ou d'intensité.
I = atome neutre ; II = ion de charge +1. Air et vide ne sont jamais mélangés.
"""
import argparse
import csv
from pathlib import Path
import matplotlib.pyplot as plt


def plot_lines(symbol='Fe', stage='I', medium='air', minimum=None, maximum=None, csv_path=None):
    path = Path(csv_path) if csv_path else Path(__file__).with_name('spectra484.csv')
    with path.open(encoding='utf-8') as stream:
        rows = [r for r in csv.DictReader(stream) if r['element'] == symbol and r['stage'] == stage and r['medium'] == medium]
    if not rows:
        raise ValueError(f'Aucune raie intégrée pour {symbol} {stage}, convention {medium}. Essayer un autre stade ou la convention vacuum.')
    wavelengths = [float(r['nm']) for r in rows]
    lo = max(0, min(wavelengths)-5) if minimum is None else minimum
    hi = max(wavelengths)+5 if maximum is None else maximum
    if not 0 <= lo < hi:
        raise ValueError('Les bornes doivent vérifier 0 ≤ min < max.')
    visible = [w for w in wavelengths if lo <= w <= hi]
    fig, ax = plt.subplots(figsize=(10, 3.4), layout='constrained')
    ax.vlines(visible, 0, 1, color='#257b83', linewidth=1.5)
    ax.set(xlim=(lo, hi), ylim=(0, 1.2), xlabel=f'Longueur d’onde / nm ({medium})',
           title=f'{symbol} {stage} — sélection NIST, hauteurs uniformes', yticks=[])
    ax.spines[['top', 'right', 'left']].set_visible(False)
    ax.text(.01, .96, f'{len(visible)}/{len(rows)} raies · ni intensité, ni absorbance', transform=ax.transAxes, va='top')
    return fig, rows


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('element', nargs='?', default='Fe')
    parser.add_argument('--stage', choices=['I', 'II'], default='I')
    parser.add_argument('--medium', choices=['air', 'vacuum'], default='air')
    parser.add_argument('--min', type=float, dest='minimum')
    parser.add_argument('--max', type=float, dest='maximum')
    parser.add_argument('--output', default='spectre.png')
    args = parser.parse_args()
    figure, rows = plot_lines(args.element, args.stage, args.medium, args.minimum, args.maximum)
    figure.savefig(args.output, dpi=180)
    print(f'Figure : {args.output}\nSource : {rows[0]["source"]}')
