export function getNormallyDuration(duration: number): string {
  const formatter = new Intl.DateTimeFormat('ru', {
    minute: 'numeric',
    second: 'numeric',
  });
  const res = formatter.format(duration * 1000);

  return res;
}
