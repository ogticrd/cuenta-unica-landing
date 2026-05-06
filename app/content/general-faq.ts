import { Questions } from '@/app/types';

export const generalFaqQuestions: Questions[] = [
  {
    question: '¿Qué es la Cuenta Única Ciudadana?',
    answer:
      'La Cuenta Única Ciudadana es el mecanismo de autenticación digital que permite a las personas identificarse de forma segura ante los portales y aplicaciones del Estado dominicano que estén integrados al servicio. Con ella, la cédula de identidad y electoral funciona como identificador principal y el usuario administra sus credenciales desde una sola cuenta.',
  },
  {
    question: '¿Qué problema busca resolver la Cuenta Única Ciudadana?',
    answer:
      'Busca reducir la necesidad de crear usuarios diferentes para cada servicio público digital. Al centralizar la autenticación, mejora la experiencia del ciudadano, disminuye el riesgo de cuentas abandonadas o contraseñas reutilizadas y ayuda a confirmar que quien accede a un servicio es la persona titular de la identidad.',
  },
  {
    question: '¿Cómo se crea una Cuenta Única Ciudadana?',
    answer:
      'El registro inicia con la cédula de identidad y electoral. Luego se realiza una verificación de identidad, que puede incluir prueba de vida y comparación facial con la información disponible en la Junta Central Electoral. Finalmente, el ciudadano crea una contraseña segura y confirma su correo electrónico personal.',
  },
  {
    question: '¿Para cuáles servicios me sirve esta cuenta?',
    answer:
      'La Cuenta Única Ciudadana sirve para acceder a los servicios digitales del Estado que se integren a la plataforma. Su adopción es progresiva, por lo que cada institución irá habilitando el acceso según sus propios sistemas y procesos.',
  },
  {
    question:
      '¿Puedo acceder a todos los servicios del Estado con este registro?',
    answer:
      'Ese es uno de los objetivos de la iniciativa, pero la disponibilidad depende de que cada institución gubernamental integre sus servicios digitales con Cuenta Única Ciudadana. Mientras avanza esa integración, la cuenta estará disponible en los portales y aplicaciones que ya la tengan habilitada.',
  },
  {
    question:
      '¿La Cuenta Única Ciudadana sustituye la cédula o el acta de nacimiento?',
    answer:
      'No. La Cuenta Única Ciudadana no sustituye la cédula de identidad y electoral ni el acta de nacimiento. Es un mecanismo de autenticación para servicios digitales. La cédula sigue siendo el documento oficial de identidad y la Junta Central Electoral es la entidad competente para su emisión y administración.',
  },
  {
    question: '¿Por qué se valida mi cédula con la Junta Central Electoral?',
    answer:
      'La validación con la Junta Central Electoral permite confirmar que la identidad indicada corresponde a una persona registrada oficialmente. Esta verificación ayuda a proteger al ciudadano y a las instituciones frente a intentos de suplantación de identidad.',
  },
  {
    question:
      '¿Por qué se solicita acceso a la cámara durante la prueba de vida?',
    answer:
      'El acceso a la cámara se utiliza para completar la verificación de identidad dentro del proceso de registro. Es un permiso temporal del navegador para esa acción específica; no permite acceso remoto permanente a la cámara del dispositivo.',
  },
  {
    question: '¿Qué tan segura es la plataforma?',
    answer:
      'Cuenta Única Ciudadana utiliza estándares reconocidos de autenticación y autorización, como OpenID Connect y OAuth 2.0, junto con prácticas de seguridad orientadas a proteger la identidad digital del ciudadano. También permite fortalecer el acceso con métodos adicionales de autenticación cuando estén disponibles para el usuario.',
  },
  {
    question:
      '¿Los métodos adicionales de autenticación dan acceso a mis dispositivos?',
    answer:
      'No. Los métodos como llaves de seguridad, autenticación desde el dispositivo o mecanismos sin contraseña se apoyan en estándares diseñados para validar el acceso sin entregar a la plataforma control sobre el equipo ni acceso libre a información biométrica del usuario.',
  },
  {
    question: '¿Cuál es el marco legal relacionado con datos y seguridad?',
    answer:
      'La Cuenta Única Ciudadana se apoya en el marco normativo dominicano aplicable a identidad, protección de datos personales, interoperabilidad gubernamental y servicios digitales del Estado, incluyendo las disposiciones vigentes sobre datos personales, datos biométricos e intercambio seguro de información entre instituciones.',
  },
  {
    question: '¿Cuenta Única Ciudadana ofrece APIs para instituciones?',
    answer:
      'Sí. Las instituciones que integren sus servicios pueden utilizar capacidades basadas en estándares como OpenID Connect y OAuth 2.0 para autenticación. La integración debe realizarse mediante los canales y lineamientos técnicos definidos por OGTIC.',
  },
  {
    question: '¿Funcionará como una plataforma única de pagos?',
    answer:
      'No. Cuenta Única Ciudadana no es una plataforma de pagos. Su función principal es autenticar digitalmente al ciudadano. Sin embargo, puede facilitar el acceso seguro a servicios públicos digitales que incluyan procesos de pago dentro de los sistemas de cada institución.',
  },
];
