export const ClassNames = (...inputs: (string | undefined | null | { [key: string]: boolean })[]): string => {
    let result = '';
    for (const input of inputs) {
        if (input) {
            if (typeof input === 'string') {
                result += input + ' ';
            } else if (typeof input === 'object') {
                for (const key in input) {
                    if (input[key]) {
                        result += key + ' ';
                    }
                }
            }
        }
    }
    return result.trim();
};