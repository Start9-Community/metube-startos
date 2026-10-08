import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.8.28:2',
  releaseNotes: {
    en_US: `- Reset Web UI Password asks for confirmation before it replaces the existing password, and says that the current password stops working.
- Select Download Destination explains each destination, and that files already downloaded stay where they are.
- Saving downloads into FileBrowser Quantum works when FileBrowser Quantum is installed, not only the older File Browser.
- The Web UI Password result is shown in your language.
- Choosing NextExplorer as the destination adds the subfolder's first folder to NextExplorer as a location if it is missing. The choice is refused, and the previous one kept, if NextExplorer is not installed, is older than 3.1.0:2, or rejects the name.
- The subfolder fields refuse a path that starts with a slash or contains a .. folder.`,
    es_ES: `- Restablecer contraseña de la interfaz web pide confirmación antes de reemplazar la contraseña existente e indica que la contraseña actual deja de funcionar.
- Seleccionar destino de descarga explica cada destino y que los archivos ya descargados se quedan donde están.
- Guardar las descargas en FileBrowser Quantum funciona cuando FileBrowser Quantum está instalado, no solo con el antiguo File Browser.
- El resultado de la contraseña de la interfaz web se muestra en tu idioma.
- Elegir NextExplorer como destino añade la primera carpeta de la subcarpeta a NextExplorer como ubicación si falta. La elección se rechaza, y se mantiene la anterior, si NextExplorer no está instalado, es anterior a 3.1.0:2 o rechaza el nombre.
- Los campos de subcarpeta rechazan una ruta que empiece por una barra o contenga una carpeta ..`,
    de_DE: `- „Web-UI-Passwort zurücksetzen“ fragt vor dem Ersetzen des vorhandenen Passworts nach einer Bestätigung und weist darauf hin, dass das aktuelle Passwort danach nicht mehr funktioniert.
- „Download-Ziel auswählen“ erklärt jedes Ziel und dass bereits heruntergeladene Dateien bleiben, wo sie sind.
- Das Speichern von Downloads in FileBrowser Quantum funktioniert, wenn FileBrowser Quantum installiert ist, nicht nur mit dem älteren File Browser.
- Das Ergebnis zum Web-UI-Passwort wird in Ihrer Sprache angezeigt.
- Wird NextExplorer als Ziel gewählt, fügt MeTube den ersten Ordner des Unterordners in NextExplorer als Standort hinzu, falls er fehlt. Die Auswahl wird abgelehnt und die bisherige bleibt bestehen, wenn NextExplorer nicht installiert ist, älter als 3.1.0:2 ist oder den Namen ablehnt.
- Die Unterordner-Felder lehnen einen Pfad ab, der mit einem Schrägstrich beginnt oder einen Ordner .. enthält.`,
    pl_PL: `- „Zresetuj hasło interfejsu webowego” prosi o potwierdzenie przed zastąpieniem istniejącego hasła i informuje, że obecne hasło przestanie działać.
- „Wybierz miejsce docelowe pobierania” wyjaśnia każde miejsce docelowe oraz to, że już pobrane pliki pozostają tam, gdzie są.
- Zapisywanie pobranych plików w FileBrowser Quantum działa, gdy zainstalowany jest FileBrowser Quantum, a nie tylko starszy File Browser.
- Wynik akcji hasła interfejsu webowego jest wyświetlany w Twoim języku.
- Wybranie NextExplorer jako miejsca docelowego dodaje pierwszy folder podfolderu do NextExplorer jako lokalizację, jeśli jej brakuje. Wybór zostaje odrzucony, a poprzedni pozostaje, jeśli NextExplorer nie jest zainstalowany, jest starszy niż 3.1.0:2 lub odrzuca nazwę.
- Pola podfolderu odrzucają ścieżkę zaczynającą się od ukośnika lub zawierającą folder ..`,
    fr_FR: `- Réinitialiser le mot de passe de l'interface web demande une confirmation avant de remplacer le mot de passe existant, et indique que le mot de passe actuel cesse de fonctionner.
- Sélectionner la destination des téléchargements explique chaque destination, et que les fichiers déjà téléchargés restent où ils sont.
- L'enregistrement des téléchargements dans FileBrowser Quantum fonctionne lorsque FileBrowser Quantum est installé, et pas seulement avec l'ancien File Browser.
- Le résultat du mot de passe de l'interface web s'affiche dans votre langue.
- Choisir NextExplorer comme destination ajoute le premier dossier du sous-dossier à NextExplorer comme emplacement s’il manque. Le choix est refusé, et le précédent conservé, si NextExplorer n’est pas installé, est antérieur à 3.1.0:2 ou refuse le nom.
- Les champs de sous-dossier refusent un chemin qui commence par une barre oblique ou contient un dossier ..`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
