export const CssClassHandler = {
  gather(...classes: (string | undefined)[]): string {
    return classes.filter(Boolean).join(' ');
  },
};