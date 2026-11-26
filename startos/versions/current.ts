import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.11.24:0',
  releaseNotes: {
    en_US: `- Updates MeTube to 2026.11.24, with yt-dlp 2026.11.23.
- Downloads that drop mid-transfer are retried with backoff instead of failing.
- Subscription downloads use the playlist/channel output template, and private playlist videos are no longer marked as seen during subscription scans.
- Adding a channel without picking a tab queues each of its videos, and playlist and channel downloads keep the custom name prefix.
- Captions saved to a custom folder are recorded at their final path.
- A crash in a yt-dlp site extractor is reported as an error on the download instead of a server error.
- Security: downloads are kept out of MeTube's state directory.`,
    es_ES: `- Actualiza MeTube a 2026.11.24, con yt-dlp 2026.11.23.
- Las descargas que se interrumpen a mitad de transferencia se reintentan con espera progresiva en lugar de fallar.
- Las descargas de suscripciones usan la plantilla de salida de listas y canales, y los vídeos privados de una lista ya no se marcan como vistos al revisar las suscripciones.
- Añadir un canal sin elegir una pestaña pone en cola cada uno de sus vídeos, y las descargas de listas y canales conservan el prefijo de nombre personalizado.
- Los subtítulos guardados en una carpeta personalizada se registran en su ruta final.
- Un fallo en un extractor de sitio de yt-dlp se muestra como error en la descarga en lugar de un error del servidor.
- Seguridad: las descargas se mantienen fuera del directorio de estado de MeTube.`,
    de_DE: `- Aktualisiert MeTube auf 2026.11.24, mit yt-dlp 2026.11.23.
- Downloads, die während der Übertragung abbrechen, werden mit zunehmender Wartezeit erneut versucht, statt fehlzuschlagen.
- Abonnement-Downloads verwenden die Ausgabevorlage für Playlists und Kanäle, und private Playlist-Videos werden beim Prüfen von Abonnements nicht mehr als gesehen markiert.
- Wird ein Kanal ohne Auswahl eines Tabs hinzugefügt, wird jedes seiner Videos eingereiht, und Playlist- und Kanal-Downloads behalten das benutzerdefinierte Namenspräfix.
- Untertitel, die in einem benutzerdefinierten Ordner gespeichert werden, werden mit ihrem endgültigen Pfad erfasst.
- Ein Absturz eines yt-dlp-Seitenextraktors wird als Fehler beim Download gemeldet statt als Serverfehler.
- Sicherheit: Downloads werden aus dem Statusverzeichnis von MeTube herausgehalten.`,
    pl_PL: `- Aktualizuje MeTube do 2026.11.24, z yt-dlp 2026.11.23.
- Pobieranie przerwane w trakcie transferu jest ponawiane z rosnącym odstępem zamiast kończyć się błędem.
- Pobieranie z subskrypcji używa szablonu wyjściowego playlist i kanałów, a prywatne filmy z playlist nie są już oznaczane jako obejrzane podczas sprawdzania subskrypcji.
- Dodanie kanału bez wyboru karty dodaje do kolejki każdy z jego filmów, a pobieranie playlist i kanałów zachowuje niestandardowy prefiks nazwy.
- Napisy zapisane w niestandardowym folderze są rejestrowane pod ich ostateczną ścieżką.
- Awaria ekstraktora strony w yt-dlp jest zgłaszana jako błąd pobierania zamiast błędu serwera.
- Bezpieczeństwo: pobierane pliki są trzymane poza katalogiem stanu MeTube.`,
    fr_FR: `- Met à jour MeTube vers 2026.11.24, avec yt-dlp 2026.11.23.
- Les téléchargements interrompus en cours de transfert sont relancés avec un délai croissant au lieu d'échouer.
- Les téléchargements d'abonnements utilisent le modèle de sortie des playlists et des chaînes, et les vidéos privées d'une playlist ne sont plus marquées comme vues lors de l'analyse des abonnements.
- Ajouter une chaîne sans choisir d'onglet met en file chacune de ses vidéos, et les téléchargements de playlists et de chaînes conservent le préfixe de nom personnalisé.
- Les sous-titres enregistrés dans un dossier personnalisé sont référencés à leur emplacement final.
- Un plantage d'un extracteur de site yt-dlp est signalé comme une erreur du téléchargement au lieu d'une erreur serveur.
- Sécurité : les téléchargements sont tenus hors du répertoire d'état de MeTube.`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
