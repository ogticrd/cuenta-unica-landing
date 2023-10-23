import { Container } from '../components/container';
import { Typography } from '../components/typography';

export default function PrivacyPolicyPage() {
  return (
    <div style={{ padding: '60px 0' }}>
      <Container maxWidth="md">
        <Typography color="primary" variant="h1" gutterBottom>
          Política de privacidad
        </Typography>
        <Typography variant="body1" gutterBottom>
          La información suministrada es tratada con estricta confidencialidad y
          de conformidad con los Términos de Uso del portal de Cuenta Única. En
          adición, disponemos de medidas y dispositivos de seguridad que nos
          permiten salvaguardar las informaciones que usted nos suministra.
        </Typography>
        <Typography variant="body1" gutterBottom>
          La Oficina Gubernamental de Tecnologías de la Información y
          Comunicación actuará directamente como el responsable del tratamiento
          de los datos personales, y podrá tratar los datos personales de
          conformidad con la Ley núm. 172-13 que tiene por objeto la protección
          integral de los datos personales asentados en archivos, registros
          públicos, bancos de datos u otros medios técnicos de tratamiento de
          datos destinados a dar informes, sean estos públicos o privados.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Los datos personales suministrados serán tratados a fin de validar la
          identidad e información personal del usuario, así como con fines
          operativos y estadísticos, como insumo para el desarrollo de política
          pública o para cualquier uso destino que la OGTIC estime apropiado que
          se encuentre conforme a su objeto institucional.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Los derechos que le asisten al usuario como titular de los datos son
          los previstos en la Constitución y la ley, especialmente el derecho a
          conocer, actualizar, rectificar y suprimir su información personal,
          así como el derecho a revocar el consentimiento otorgado para el
          tratamiento de datos personales.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Los datos personales suministrados por el usuario se presumen veraces,
          completos, exactos, actualizados, reales y comprobables. En ese
          sentido, cualquier error en la información suministrada será de la
          única y exclusiva responsabilidad del usuario, lo que exonera a la
          Oficina Gubernamental de Tecnologías de la Información y Comunicación
          de responsabilidad ante terceros y las autoridades judiciales y/o
          administrativas.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Por tanto, con su registro en el portal de Cuenta Única, el usuario
          autoriza a la Oficina Gubernamental de Tecnologías de la Información y
          Comunicación, de manera previa, irrevocable, expresa, voluntaria e
          informada, a consultar y tratar los datos personales que se encuentren
          en registros públicos o privados, como información digital, de
          contacto, personal y de servicios, entre otros, de los cuales sea
          titular, así como historial de uso de su cuenta y cualquier
          información necesaria para los fines relacionados con las solicitudes
          que sean presentadas ante esta plataforma y, en general, que la
          información sea administrada, tratada, verificada, transmitida o usada
          de conformidad con las disposiciones legales que rigen la materia.
        </Typography>
        <Typography variant="body1" gutterBottom>
          De igual modo, con su registro en el portal de Cuenta Única, el
          usuario autoriza expresamente para que la información suministrada
          pueda ser utilizada por los terceros que el usuario autorice, mediante
          su Cuenta Única, de conformidad con la legislación vigente.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Por otro lado, le informamos que contamos con herramientas, políticas
          y procedimientos en el ámbito de la gestión de Tecnología de
          Información, que nos permiten garantizar la seguridad de los servicios
          utilizados a través de Cuenta Única. Ahora bien, es imprescindible
          minimizar el impacto de los riesgos de seguridad cuando acceda al
          portal, por lo que recomendamos lo siguiente:
        </Typography>

        <ul>
          <li>
            <Typography variant="body1" gutterBottom>
              Acceder desde un dispositivo personal (computadora personal,
              teléfono móvil, tableta, etc.) y que sea el único que utilice
              dicho dispositivo.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" gutterBottom>
              No dejar abierta una sesión activa en Cuenta Única si no está
              utilizando su dispositivo, en su defecto, cuando no se encuentre
              frente a su dispositivo, tome la previsión de bloquearlo y evite
              que terceros hagan uso indebido de éste.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" gutterBottom>
              No revelar su contraseña o clave de acceso (password) de Cuenta
              Única, si presume que ha sido comprometida, cámbiela a la brevedad
              posible.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" gutterBottom>
              Cambie su contraseña o clave de acceso periódicamente.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" gutterBottom>
              Obtener y mantener actualizados en su PC programas de seguridad
              como anti-virus, firewalls, anti-spyware, etc.
            </Typography>
          </li>
        </ul>

        <Typography variant="body1" gutterBottom>
          Finalmente, la información contenida en este sitio, de manera general,
          se ofrece con fines meramente informativos y a título gratuito,
          dejándose constancia expresa de que la Oficina Gubernamental de
          Tecnologías de la Información y Comunicación no asume respecto a ella
          responsabilidad alguna, ni otorga garantía de ninguna especie por su
          uso o aplicación, especialmente en lo que se refiere a la exactitud,
          vigencia o integridad. En ese sentido, el usuario de este sitio
          reconoce expresamente que la Oficina Gubernamental de Tecnologías de
          la Información y Comunicación ha realizado el máximo esfuerzo para
          asegurar la precisión y confiabilidad de la información y las
          instrucciones que componen este sitio. No obstante, debido a que el
          contenido de estas ha sido publicado de manera transitoria y puede
          presentar discrepancias con las informaciones definitivas, la Oficina
          Gubernamental de Tecnologías de la Información y Comunicación, no se
          hace responsable por eventuales deficiencias o inexactitudes del
          contenido de este sitio cualquiera que sea su causa u origen.
        </Typography>
      </Container>
    </div>
  );
}
