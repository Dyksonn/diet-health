export function transformDates(value: Date|null, mode: 'date' | 'time') {
    const valueDate = new Date(String(value));
    if (mode === 'date') return valueDate?.toLocaleDateString('pt-br');
    else return valueDate?.toLocaleTimeString('pt-br').slice(0, 5);
}