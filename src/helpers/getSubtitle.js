export const getSubtitle = ({ pathname }) => {
  const subtitle = pathname.substring(1)

  return subtitle
    ? subtitle.charAt(0).toUpperCase() + subtitle.slice(1)
    : subtitle
}
