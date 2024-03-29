module.exports = {
    content: [`app.{js,ts,vue}`],
    theme: {
        // Using this for color palette in storybook
        colors: {
            black: 'rgb(0, 0, 0)',
            white: '#ffffff',

            // new
            blush: {
                0: '#fdf4f3',
                10: '#fbeae7',
                20: '#f8dad5',
                30: '#f5cac3',
                40: '#ddb6b0',
                50: '#c4a29c',
            },

            yellow: {
                0: '#FDF2DF',
                10: '#fbe5bf',
                20: '#f9d190',
                30: '#f6bd60',
                40: '#c5974d',
                50: '#94713a',
            },
            teal: {
                0: '#dae4e2',
                10: '#c2d2ce',
                20: '#a9c0ba',
                30: '#84a59d',
                40: '#6a847e',
                50: '#5c736e',
            },
            cream: {
                0: '#fdfbf9',
                10: '#fbf6f1',
                20: '#f7ede2',
                30: '#ded5cb',
                40: '#c6beb5',
                50: '#948e88',
                60: '#635f5a',
            },
            rose: {
                0: '#fce6e6',
                10: '#f9c2c1',
                20: '#f6a9a8',
                30: '#f28482',
                40: '#c26a68',
                50: '#914f4e',
            },
            green: {
                0: '#dce7d6',
                10: '#b9ceac',
                20: '#8aae75',
                30: '#6e8b5e',
                40: '#37462f',
                50: '#536846',
            },
            gray: {
                0: '#ededec',
                10: '#c9c8c7',
                20: '#807e7c',
                30: '#4a4744',
                40: '#2c2b29',
                50: '#161514',
            },
            blue: {
                0: '#f3fcfd',
                10: '#e1f7fa',
                20: '#c3eef5',
                30: '#b0d6dd',
                40: '#9cbec4',
            },
            purple: {
                0: '#e4dadd',
                10: '#c9b5ba',
                20: '#a5848c',
                30: '#846a70',
                40: '#634f54',
            },
        },
        extend: {},
    },
    plugins: [],
};
