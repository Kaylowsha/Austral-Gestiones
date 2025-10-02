// ================================
// CONFIGURACIÓN DE SUPABASE
// ================================

// IMPORTANTE: Reemplaza estos valores con los tuyos de Supabase
const SUPABASE_CONFIG = {
    url: 'https://uzmdreqbcacwkkfwpkui.supabase.co',
    anonKey: 'sb_publishable_z5aNne74P9pZeMeUkFEyrg_857LNNBh'
    // NOTA: barberiaId se establece dinámicamente después del login
};

// Marcador de entorno
console.log('🟢 BD de Desarrollo V2 conectada');
console.log('📍 URL:', SUPABASE_CONFIG.url);

// REMOVER usuarios de prueba hardcodeados
// Los usuarios ahora vienen de la base de datos

// Lista de servicios (esto está OK, son opciones del menú)
const SERVICIOS_LISTA = [
    { id: 1, nombre: 'Corte Tradicional - Estudiante', precio: 12000 },
    { id: 2, nombre: 'Corte Tijera', precio: 15000 },
    { id: 3, nombre: 'Fade - Degradados', precio: 18000 },
    { id: 4, nombre: 'Barba Rasurado', precio: 8000 },
    { id: 5, nombre: 'Perfilado Barba', precio: 10000 },
    { id: 6, nombre: 'Barba Premium', precio: 12000 },
    { id: 7, nombre: 'Rasurado de Barba con Vapor', precio: 15000 },
    { id: 8, nombre: 'Limpieza Facial Premium', precio: 20000 },
    { id: 9, nombre: 'Servicio Full', precio: 35000 },
    { id: 10, nombre: 'Cejas', precio: 5000 },
    { id: 11, nombre: 'Diseños', precio: 8000 },
    { id: 12, nombre: 'Líneas', precio: 5000 }
];
