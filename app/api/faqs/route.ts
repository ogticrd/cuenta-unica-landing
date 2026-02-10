import { NextResponse } from 'next/server';

export async function GET() {
  const questions = [
    {
      id: 1,
      question: '¿Cómo puedo restaurar mi contraseña?',
      answer: `
        <p>Para restaurar su contraseña, siga estos pasos:</p>
        <ol>
    <li>
      <strong>Acceder a la página de inicio de sesión:</strong><br />
      Diríjase a la página de inicio de sesión:
      <a href="https://mi.cuentaunica.gob.do/ui/login" target="_blank" rel="noopener noreferrer">
        https://mi.cuentaunica.gob.do/ui/login
      </a>
    </li>

    <li>
      <strong>Iniciar el proceso de recuperación:</strong><br />
      En la pantalla de <strong>Iniciar sesión</strong>, haga clic en el enlace
      <strong>“¿Olvidó su contraseña?”</strong>.
    </li>

    <li>
      <strong>Ingresar el correo electrónico:</strong><br />
      Se mostrará la pantalla <strong>“Recuperar su cuenta”</strong>. Ingrese el correo electrónico con el que se registró y haga clic en <strong>“Continuar”</strong>.<br />
      <em>El sistema enviará un correo electrónico con un código de recuperación.</em>
    </li>

    <li>
      <strong>Revisar el correo electrónico:</strong><br />
      Revise su bandeja de entrada. Recibirá un correo con el asunto similar a
      <strong>“Recupere el acceso a su Cuenta Única”</strong>, donde encontrará el <strong>código de recuperación</strong>.<br />
      Si no lo recibe, revise la carpeta <strong>Spam / No deseados</strong> y verifique que el correo ingresado sea el mismo con el que se registró.
    </li>

    <li>
      <strong>Ingresar el código de recuperación:</strong><br />
      Regrese a la pantalla <strong>“Recuperar su cuenta”</strong>, introduzca el <strong>código de recuperación</strong> y haga clic en <strong>“Continuar”</strong>.<br />
      Si el código expiró o no llegó, utilice la opción <strong>“Reenviar código”</strong>.
    </li>

    <li>
      <strong>Confirmación de recuperación:</strong><br />
      El sistema validará el código ingresado y mostrará un mensaje indicando que la cuenta ha sido recuperada exitosamente.<br />
      <em>Se le notificará que debe cambiar su contraseña o configurar un método alternativo de inicio de sesión dentro de un tiempo determinado.</em>
    </li>

    <li>
      <strong>Cambiar la contraseña:</strong><br />
      En la pantalla <strong>Configuraciones de la Cuenta</strong>, diríjase a <strong>“Cambiar Contraseña”</strong>, ingrese la nueva contraseña y haga clic en <strong>“Guardar”</strong>.
    </li>
  </ol>
      `,
      images: [
        '/faqs/1/1-step-1.png',
        '/faqs/1/1-step-2.png',
        '/faqs/1/1-step-3.png',
        '/faqs/1/1-step-4.png',
        '/faqs/1/1-step-5.png',
        '/faqs/1/1-step-6.png',
      ],
    },
    {
      id: 2,
      question: '¿Cómo puedo re-crear mi cuenta?',
      answer: `
        <p>Si necesita volver a crear su cuenta:</p>
     <ol>
    <li>
      <strong>Verificar el estado de la cuenta anterior:</strong><br />
      Asegúrese de que su cuenta anterior haya sido eliminada o desactivada antes de iniciar el proceso de registro nuevamente.
    </li>

    <li>
      <strong>Acceder a la página de registro:</strong><br />
      Diríjase a la página de registro en el siguiente enlace:
      <a href="https://registro.cuentaunica.gob.do" target="_blank" rel="noopener noreferrer">
        https://registro.cuentaunica.gob.do
      </a>
    </li>

    <li>
      <strong>Completar el formulario de registro:</strong><br />
      Ingrese correctamente sus datos personales en el formulario de registro.
    </li>

    <li>
      <strong>Verificar el correo electrónico:</strong><br />
      Una vez enviado el formulario, revise su correo electrónico y siga las instrucciones para
      <strong>verificar su cuenta</strong> y activar el acceso a la nueva cuenta.
    </li>
  </ol>
      `,
    },
    {
      id: 3,
      question: '¿Qué hago si no recuerdo mi correo electrónico?',
      answer: `
<p>
    Si olvidó el correo electrónico asociado a su cuenta, puede seguir las
    recomendaciones a continuación:
  </p>

  <ol>
    <li>
      <strong>Buscar correos antiguos:</strong><br />
      Intente localizar correos previos enviados por <strong>Cuenta Única</strong>
      en sus bandejas de entrada, spam o archivos.
    </li>

    <li>
      <strong>Intentar iniciar sesión:</strong><br />
      Recuerde que puede iniciar sesión utilizando su
      <strong>cédula o correo electrónico</strong> junto con su
      <strong>contraseña</strong>.
    </li>

    <li>
      <strong>Contactar a soporte técnico:</strong><br />
      Si no logra identificar el correo asociado o no puede acceder a su cuenta,
      envíe un correo a
      <a href="mailto:ayudaogtic@ogtic.gob.do">ayudaogtic@ogtic.gob.do</a>
      proporcionando su <strong>número de identificación personal</strong>
      y una breve explicación del inconveniente.
    </li>
  </ol>
      `,
    },
    {
      id: 4,
      question: '¿Qué puedo hacer si no me llega el código de verificación?',
      answer: `
        <p>Si no recibe el código de verificación:</p>
        <ol>
          <li>Revise su carpeta de <strong>Spam</strong> o <strong>Correo no deseado</strong>.</li>
          <li>Espere unos minutos y solicite un nuevo código.</li>
          <li>Verifique que su correo electrónico esté escrito correctamente.</li>
        </ol>
      `,
    },
    {
      id: 5,
      question: '¿Cómo puedo reportar un error con mi cuenta?',
      answer: `
<p>
    Si experimenta algún inconveniente mientras realiza el proceso de registro
    de su cuenta, puede reportarlo utilizando cualquiera de las siguientes opciones:
  </p>

  <ol>
    <li>
      <strong>Reportar desde la plataforma:</strong><br />
      Durante el proceso de registro, puede utilizar el
      <strong>botón flotante “Reportar”</strong> ubicado en el lado derecho de la pantalla.
      Esta opción le permitirá notificar el inconveniente directamente desde la plataforma
      en el momento en que ocurre.
    </li>

    <li>
  <strong>Contactar a soporte técnico con la información requerida:</strong><br />
  Envíe un correo electrónico a
  <a href="mailto:ayudaogtic@ogtic.gob.do">ayudaogtic@ogtic.gob.do</a>
  describiendo detalladamente el problema presentado.<br />

  De ser posible, adjunte una <strong>captura de pantalla</strong> donde se muestre
  claramente el error, e incluya en el mensaje su
  <strong>número de cédula</strong> para facilitar una atención más rápida.
</li>

  </ol>

  <p>
    <em>Nota: Proporcionar información clara y completa permitirá al equipo de soporte
    brindar una solución más ágil y efectiva.</em>
  </p>
      `,
      images: ['/faqs/6/6-step-1.png'],
    },
    {
      id: 6,
      question: '¿Cómo puedo cambiar mi contraseña?',
      answer: `
        <p>Para cambiar su contraseña actual:</p>
<ol>
    <li>
      <strong>Iniciar sesión:</strong><br />
      Acceda a la página de inicio de sesión en
      <a href="https://mi.cuentaunica.gob.do/ui/login" target="_blank" rel="noopener noreferrer">
        https://mi.cuentaunica.gob.do/ui/login
      </a>
      e inicie sesión con sus credenciales.
    </li>

    <li>
      <strong>Acceder a la sección Contraseña:</strong><br />
      Una vez dentro de la plataforma, en el menú lateral izquierdo,
      seleccione la opción <strong>“Contraseña”</strong>.
    </li>

    <li>
      <strong>Cambiar la contraseña:</strong><br />
      Diríjase a la sección <strong>“Cambiar Contraseña”</strong>,
      ingrese la <strong>nueva contraseña</strong> en el campo correspondiente.
    </li>

    <li>
      <strong>Guardar los cambios:</strong><br />
      Haga clic en el botón <strong>“Guardar”</strong> para aplicar
      la actualización de su contraseña.
    </li>
  </ol>
      `,
      images: ['/faqs/7/7-step-1.png'],
    },
    {
      id: 7,
      question: '¿Puedo agregar un segundo factor de autenticación?',
      answer: `
         <p>
    Actualmente, la opción de <strong>segundo factor de autenticación (2FA)</strong>
    <strong>no se encuentra disponible</strong> en la plataforma.
  </p>

  <p>
    Sin embargo, nos encontramos trabajando en la implementación de este mecanismo
    de seguridad para ofrecer una capa adicional de protección a su cuenta en el futuro.
  </p>

  <p>
    Una vez habilitada esta funcionalidad, se notificará a los usuarios y se
    proporcionarán instrucciones claras para su configuración.
  </p>

  <p>
    <em>
      Recomendamos mantenerse atento a las actualizaciones de la plataforma para
      conocer la disponibilidad de nuevas funciones de seguridad.
    </em>
  </p>
      `,
    },
    {
      id: 8,
      question: '¿Se puede eliminar una cuenta?',
      answer: `
        <p>
    Actualmente, <strong>no es posible eliminar una cuenta de manera manual</strong>
    desde la plataforma.
  </p>

  <p>
    Si desea solicitar la eliminación permanente de su cuenta, debe realizar la solicitud
    a través de correo electrónico siguiendo los pasos a continuación:
  </p>

  <ol>
    <li>
      <strong>Redactar un correo electrónico:</strong><br />
      Envíe un correo a la dirección
      <a href="mailto:ayudaogtic@ogtic.gob.do">ayudaogtic@ogtic.gob.do</a>.
    </li>

    <li>
      <strong>Explicar el motivo de la solicitud:</strong><br />
      En el correo, indique claramente las razones por las cuales desea eliminar su cuenta.
      Esto permitirá que el equipo de soporte evalúe su solicitud.
    </li>

    <li>
      <strong>Esperar confirmación:</strong><br />
      Una vez recibida la solicitud, el equipo correspondiente se pondrá en contacto
      para informar sobre el estado del proceso.
    </li>
  </ol>

  <p>
    <em>Nota: La eliminación de la cuenta, una vez aprobada y ejecutada, es irreversible.</em>
  </p>
      `,
    },
  ];

  return NextResponse.json({ questions });
}
