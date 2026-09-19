/** 第３弾（FOMARE）＋ ARTISTS 更新の同時公開時刻（JST） */
export const THIRD_WAVE_PUBLISH_AT = '2026-09-21T12:00:00+09:00'

export function isReleasedAt(
  publishAt: string,
  nowMs: number = Date.now(),
): boolean {
  return nowMs >= Date.parse(publishAt)
}
