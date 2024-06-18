class SingletonTS {
  // Variable estática para mantener la única instancia de la clase.
  private static instance: SingletonTS;

  // Una propiedad pública para demostrar que la instancia es única.
  public random: number;

  // Constructor privado para prevenir la creación directa de instancias.
  private constructor() {
    this.random = Math.random();
  }

  // Método estático para obtener la instancia única de la clase.
  public static getInstance(): SingletonTS {
    // Si no hay una instancia creada, crea una nueva.
    if (!SingletonTS.instance) {
      SingletonTS.instance = new SingletonTS();
    }

    // Devuelve la instancia única.
    return this.instance;
  }
}

// Uso del patrón Singleton.
const singleton = SingletonTS.getInstance();
console.log(singleton.random); // Imprime un número aleatorio.
