export const isDarkTheme = () => {
    return (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
    )
}
