export const primaryColor = '#3c3f41'

export const statusHeight = 43

export function getRealScreenHeight(Utils) {
    if(WXEnvironment.platform === 'Web') {
        return Utils.env.getScreenHeight()
    }
    return Utils.env.getScreenHeight() - statusHeight
}