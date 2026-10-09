import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.9.29:0',
  releaseNotes: {
    en_US: `- Updates MeTube to 2026.09.29. Adds a per-download video password for protected videos, an Auto audio format, a choice of which tags are written into the file, and says when an add is skipped because the video is already in the download archive. A queued download no longer offers a Start button that does nothing, and cancelling a download stops it.
- MeTube blocks state-changing browser requests and Socket.IO connections from other origins. Bookmarklets running on other sites, and extensions submitting as those sites, can no longer add downloads; paste links into MeTube's own UI instead.
- Reset Web UI Password asks for confirmation before it replaces the existing password, and says that the current password stops working.
- Select Download Destination explains each destination, and that files already downloaded stay where they are.
- The Web UI Password result is shown in your language.
- Choosing NextExplorer as the destination adds the subfolder's first folder to NextExplorer as a location if it is missing. The choice is refused, and the previous one kept, if NextExplorer is not installed, is older than 3.1.0:2, or rejects the name.
- The subfolder fields refuse a path that starts with a slash or contains a .. folder.

[All upstream changes](https://github.com/alexta69/metube/compare/2026.08.28...2026.09.29)`,
    es_ES: `- Actualiza MeTube a 2026.09.29. Añade una contraseña de vídeo por descarga para vídeos protegidos, un formato de audio Automático, la elección de qué etiquetas se escriben en el archivo, y avisa cuando se omite una descarga porque el vídeo ya está en el archivo de descargas. Una descarga en cola ya no ofrece un botón Iniciar que no hace nada, y cancelar una descarga la detiene.
- MeTube bloquea las solicitudes del navegador que modifican el estado y las conexiones Socket.IO desde otros orígenes. Los bookmarklets ejecutados en otros sitios y las extensiones que envían solicitudes desde el origen de esos sitios ya no pueden añadir descargas; pega los enlaces en la propia interfaz de MeTube.
- Restablecer contraseña de la interfaz web pide confirmación antes de reemplazar la contraseña existente e indica que la contraseña actual deja de funcionar.
- Seleccionar destino de descarga explica cada destino y que los archivos ya descargados se quedan donde están.
- El resultado de la contraseña de la interfaz web se muestra en tu idioma.
- Elegir NextExplorer como destino añade la primera carpeta de la subcarpeta a NextExplorer como ubicación si falta. La elección se rechaza, y se mantiene la anterior, si NextExplorer no está instalado, es anterior a 3.1.0:2 o rechaza el nombre.
- Los campos de subcarpeta rechazan una ruta que empiece por una barra o contenga una carpeta ..

[Todos los cambios de MeTube](https://github.com/alexta69/metube/compare/2026.08.28...2026.09.29)`,
    de_DE: `- Aktualisiert MeTube auf 2026.09.29. Fügt ein Video-Passwort pro Download für geschützte Videos, ein automatisches Audioformat und eine Auswahl der in die Datei geschriebenen Tags hinzu und meldet, wenn ein Hinzufügen übersprungen wird, weil das Video bereits im Download-Archiv steht. Ein Download in der Warteschlange bietet keinen wirkungslosen Start-Knopf mehr, und das Abbrechen eines Downloads stoppt ihn.
- MeTube blockiert zustandsändernde Browseranfragen und Socket.IO-Verbindungen von anderen Ursprüngen. Bookmarklets auf anderen Websites und Erweiterungen, die mit deren Ursprung senden, können keine Downloads mehr hinzufügen; fügen Sie Links stattdessen in MeTubes eigener Oberfläche ein.
- „Web-UI-Passwort zurücksetzen“ fragt vor dem Ersetzen des vorhandenen Passworts nach einer Bestätigung und weist darauf hin, dass das aktuelle Passwort danach nicht mehr funktioniert.
- „Download-Ziel auswählen“ erklärt jedes Ziel und dass bereits heruntergeladene Dateien bleiben, wo sie sind.
- Das Ergebnis zum Web-UI-Passwort wird in Ihrer Sprache angezeigt.
- Wird NextExplorer als Ziel gewählt, fügt MeTube den ersten Ordner des Unterordners in NextExplorer als Standort hinzu, falls er fehlt. Die Auswahl wird abgelehnt und die bisherige bleibt bestehen, wenn NextExplorer nicht installiert ist, älter als 3.1.0:2 ist oder den Namen ablehnt.
- Die Unterordner-Felder lehnen einen Pfad ab, der mit einem Schrägstrich beginnt oder einen Ordner .. enthält.

[Alle Änderungen in MeTube](https://github.com/alexta69/metube/compare/2026.08.28...2026.09.29)`,
    pl_PL: `- Aktualizuje MeTube do 2026.09.29. Dodaje hasło wideo dla pojedynczego pobierania chronionych filmów, automatyczny format audio, wybór tagów zapisywanych w pliku oraz informuje, gdy dodanie zostaje pominięte, bo film jest już w archiwum pobrań. Pobieranie w kolejce nie oferuje już niedziałającego przycisku Start, a anulowanie pobierania je zatrzymuje.
- MeTube blokuje żądania przeglądarki zmieniające stan i połączenia Socket.IO z innych źródeł. Bookmarklety uruchamiane w innych witrynach oraz rozszerzenia wysyłające żądania z ich źródła nie mogą już dodawać pobrań; wklejaj linki bezpośrednio w interfejsie MeTube.
- „Zresetuj hasło interfejsu webowego” prosi o potwierdzenie przed zastąpieniem istniejącego hasła i informuje, że obecne hasło przestanie działać.
- „Wybierz miejsce docelowe pobierania” wyjaśnia każde miejsce docelowe oraz to, że już pobrane pliki pozostają tam, gdzie są.
- Wynik akcji hasła interfejsu webowego jest wyświetlany w Twoim języku.
- Wybranie NextExplorer jako miejsca docelowego dodaje pierwszy folder podfolderu do NextExplorer jako lokalizację, jeśli jej brakuje. Wybór zostaje odrzucony, a poprzedni pozostaje, jeśli NextExplorer nie jest zainstalowany, jest starszy niż 3.1.0:2 lub odrzuca nazwę.
- Pola podfolderu odrzucają ścieżkę zaczynającą się od ukośnika lub zawierającą folder ..

[Wszystkie zmiany w MeTube](https://github.com/alexta69/metube/compare/2026.08.28...2026.09.29)`,
    fr_FR: `- Met à jour MeTube vers 2026.09.29. Ajoute un mot de passe vidéo par téléchargement pour les vidéos protégées, un format audio Automatique, le choix des balises écrites dans le fichier, et signale quand un ajout est ignoré parce que la vidéo figure déjà dans l'archive des téléchargements. Un téléchargement en file d'attente ne propose plus de bouton Démarrer sans effet, et annuler un téléchargement l'arrête.
- MeTube bloque les requêtes du navigateur qui modifient l'état et les connexions Socket.IO provenant d'autres origines. Les bookmarklets exécutés sur d'autres sites et les extensions qui envoient des requêtes depuis l'origine de ces sites ne peuvent plus ajouter de téléchargements ; collez les liens dans l'interface de MeTube.
- Réinitialiser le mot de passe de l'interface web demande une confirmation avant de remplacer le mot de passe existant, et indique que le mot de passe actuel cesse de fonctionner.
- Sélectionner la destination des téléchargements explique chaque destination, et que les fichiers déjà téléchargés restent où ils sont.
- Le résultat du mot de passe de l'interface web s'affiche dans votre langue.
- Choisir NextExplorer comme destination ajoute le premier dossier du sous-dossier à NextExplorer comme emplacement s’il manque. Le choix est refusé, et le précédent conservé, si NextExplorer n’est pas installé, est antérieur à 3.1.0:2 ou refuse le nom.
- Les champs de sous-dossier refusent un chemin qui commence par une barre oblique ou contient un dossier ..

[Tous les changements de MeTube](https://github.com/alexta69/metube/compare/2026.08.28...2026.09.29)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
