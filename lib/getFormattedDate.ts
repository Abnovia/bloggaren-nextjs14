export default function getFormattedDate(dateString: string): string {
  return new Intl.DateTimeFormat('sv-SE', { dateStyle: 'long' }).format(
    new Date(dateString)
  );
}
