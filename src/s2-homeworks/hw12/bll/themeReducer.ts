type initStatePropsType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state: initStatePropsType = initState, action: changeThemeIdPropsType): initStatePropsType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}


export type changeThemeIdPropsType = {
    type: 'SET_THEME_ID',
    id: number
}

// export type changeThemeIdPropsType = ReturnType<typeof changeThemeId>

export const changeThemeId = (id: number): changeThemeIdPropsType => ({ type: 'SET_THEME_ID', id } as const) // fix any
