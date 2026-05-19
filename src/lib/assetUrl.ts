/** public フォルダ内のアセットを base 付きで参照する（GitHub Pages 用） */
export function assetUrl(path: string): string {
  const normalized = path.startsWith('/') ? path.slice(1) : path
  return `${import.meta.env.BASE_URL}${normalized}`
}
