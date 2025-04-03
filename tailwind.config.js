/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "black": "#000000",
                "white": "#FFFFFF",
                "green": "#030303",
                "blue": "#1D1D1B",
                "neon-green": "#B7EB08",
                "purple": "#5000FF",
                "gray": "#E4E2D9",
                "grays": "#d3d3d3",
                "teal": "#13AA52",
                "orange": "#FF4A00"
            },
            fontFamily: {
                sans: ["DM Sans", "sans-serif"],
            },
            fontSize: {
                'xs': '0.75rem',     
                'sm': '0.875rem',    
                'base': '1rem',     
                'lg': '1.125rem',   
                'xl': '1.25rem',    
                '2xl': '1.5rem',    
                '3xl': '1.875rem',  
                '4xl': '2.25rem',   
                '5xl': '3rem',      
                '6xl': '3.75rem',   
                '7xl': '4.5rem',   
            },
            fontWeight: {
                'light': 300,
                'normal': 400,
                'medium': 500,
                'semibold': 600,
                'bold': 700,
            },
            letterSpacing: {
                'tighter': '-0.05em',
                'tight': '-0.025em',
                'normal': '0',
                'wide': '0.025em',
                'wider': '0.05em',
                'widest': '0.1em',
            },
            lineHeight: {
                'none': '1',
                'tight': '1.25',
                'snug': '1.375',
                'normal': '1.5',
                'relaxed': '1.625',
                'loose': '2',
            },
            animation: {
                "spin-slow": "spin 20s linear infinite",
            },
        },
    },
    plugins: [],
};
