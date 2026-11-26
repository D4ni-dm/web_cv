const formaciones = [
    {
        id: 1,
        titulo: {
            es: "Desarrollo de Aplicaciones Web",
            en: "Higher Technician in Web Application Development",
        },
        centro: "Davante MEDAC Móstoles",
        inicio: 2023,
        fin: 2025,
    },
    {
        id: 2,
        titulo: {
            es: "Desarrollo de Aplicaciones Multiplataforma",
            en: "Higher Technician in Multiplatform Application Development",
        },
        centro: "XTART Alcorcón",
        inicio: 2025,
        fin: null, // null = todavía en curso (el texto sale de textos.enCurso)
    },
];

export default formaciones;
