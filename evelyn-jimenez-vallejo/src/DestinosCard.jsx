function DestinosCard({ viaje }) {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', margin: '10px', textAlign: 'center', backgroundColor: '#fff' }}>
      <img 
        src={viaje.imagenDinamica} 
        alt={viaje.ciudad} 
        style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }} 
      />
      <h2 style={{ color: '#12161a' }}>{viaje.pais} - {viaje.ciudad}</h2>
      <p><strong>Duración:</strong> {viaje.duracionDias} días</p>
      <p style={{ fontSize: '1.2em', color: '#b0218a' }}>
        <strong>Precio:</strong> ${viaje.precioCOP.toLocaleString('es-CO')} COP
      </p>
    </div>
  );
}

export default DestinosCard;