import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.6.28:0',
  releaseNotes: {
    en_US:
      'Updated MeTube to 2026.6.28.\n\n' +
      'Highlights since 2026.4.28:\n' +
      '- Added support for downloading live streams\n' +
      '- Optional following of nightly yt-dlp releases; yt-dlp updated to 2026.6.9\n' +
      '- Fixes for batch downloads, cookie-file downloads, and audio URL handling\n' +
      '- Upgraded the web UI to Angular 22 and refreshed dependencies\n\n' +
      'Full changelog: https://github.com/alexta69/metube/releases\n\n' +
      'Also includes internal updates for start-sdk 2.0.',
    es_ES:
      'Se actualizó MeTube a 2026.6.28.\n\n' +
      'Novedades desde 2026.4.28:\n' +
      '- Se añadió compatibilidad con la descarga de transmisiones en vivo\n' +
      '- Seguimiento opcional de las versiones nocturnas de yt-dlp; yt-dlp actualizado a 2026.6.9\n' +
      '- Correcciones en descargas por lotes, descargas de archivos de cookies y gestión de URL de audio\n' +
      '- Se actualizó la interfaz web a Angular 22 y se renovaron las dependencias\n\n' +
      'Registro de cambios completo: https://github.com/alexta69/metube/releases\n\n' +
      'También incluye actualizaciones internas para start-sdk 2.0.',
    de_DE:
      'MeTube wurde auf 2026.6.28 aktualisiert.\n\n' +
      'Highlights seit 2026.4.28:\n' +
      '- Unterstützung für das Herunterladen von Livestreams hinzugefügt\n' +
      '- Optionales Verfolgen der nächtlichen yt-dlp-Releases; yt-dlp auf 2026.6.9 aktualisiert\n' +
      '- Korrekturen bei Stapel-Downloads, Cookie-Datei-Downloads und der Audio-URL-Verarbeitung\n' +
      '- Weboberfläche auf Angular 22 aktualisiert und Abhängigkeiten erneuert\n\n' +
      'Vollständiges Changelog: https://github.com/alexta69/metube/releases\n\n' +
      'Enthält außerdem interne Aktualisierungen für start-sdk 2.0.',
    pl_PL:
      'Zaktualizowano MeTube do 2026.6.28.\n\n' +
      'Najważniejsze zmiany od 2026.4.28:\n' +
      '- Dodano obsługę pobierania transmisji na żywo\n' +
      '- Opcjonalne śledzenie nocnych wydań yt-dlp; yt-dlp zaktualizowano do 2026.6.9\n' +
      '- Poprawki pobierania wsadowego, pobierania plików cookie i obsługi adresów URL audio\n' +
      '- Zaktualizowano interfejs sieciowy do Angular 22 i odświeżono zależności\n\n' +
      'Pełny dziennik zmian: https://github.com/alexta69/metube/releases\n\n' +
      'Zawiera również wewnętrzne aktualizacje dla start-sdk 2.0.',
    fr_FR:
      'MeTube a été mis à jour vers 2026.6.28.\n\n' +
      'Nouveautés depuis 2026.4.28 :\n' +
      '- Ajout de la prise en charge du téléchargement des diffusions en direct\n' +
      '- Suivi optionnel des versions nightly de yt-dlp ; yt-dlp mis à jour vers 2026.6.9\n' +
      '- Corrections des téléchargements par lots, des téléchargements de fichiers de cookies et de la gestion des URL audio\n' +
      "- Mise à niveau de l'interface web vers Angular 22 et rafraîchissement des dépendances\n\n" +
      'Journal des modifications complet : https://github.com/alexta69/metube/releases\n\n' +
      'Comprend également des mises à jour internes pour start-sdk 2.0.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
