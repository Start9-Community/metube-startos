import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.10.20:0',
  releaseNotes: {
    en_US: `- Updates MeTube to 2026.10.20. Stops trusting certificates from a compromised certificate authority (eMudhra) when downloading.
- A playlist can be browsed and individual entries picked before they are queued.
- Clear failed asks for confirmation before removing the failed rows.
- Clip downloads keep their video.
- A download that fails to start is shown as failed instead of hanging in the queue, and cancellations made while a playlist is being added are kept.
- Form settings are kept in the browser's local storage instead of cookies.

[All upstream changes](https://github.com/alexta69/metube/compare/2026.09.29...2026.10.20)`,
    es_ES: `- Actualiza MeTube a 2026.10.20. Deja de confiar en los certificados de una autoridad de certificación comprometida (eMudhra) al descargar.
- Se puede explorar una lista de reproducción y elegir entradas concretas antes de ponerlas en cola.
- Borrar fallidas pide confirmación antes de eliminar las filas fallidas.
- Las descargas de fragmentos conservan el vídeo.
- Una descarga que no consigue iniciarse se muestra como fallida en lugar de quedarse atascada en la cola, y se conservan las cancelaciones hechas mientras se añade una lista de reproducción.
- Los ajustes del formulario se guardan en el almacenamiento local del navegador en lugar de en cookies.

[Todos los cambios de MeTube](https://github.com/alexta69/metube/compare/2026.09.29...2026.10.20)`,
    de_DE: `- Aktualisiert MeTube auf 2026.10.20. Vertraut beim Herunterladen keinen Zertifikaten einer kompromittierten Zertifizierungsstelle (eMudhra) mehr.
- Eine Playlist lässt sich durchsuchen, und einzelne Einträge können vor dem Einreihen ausgewählt werden.
- „Fehlgeschlagene löschen“ fragt vor dem Entfernen der fehlgeschlagenen Zeilen nach einer Bestätigung.
- Clip-Downloads behalten ihr Video.
- Ein Download, der nicht starten kann, wird als fehlgeschlagen angezeigt, statt in der Warteschlange hängen zu bleiben, und Abbrüche während des Hinzufügens einer Playlist bleiben erhalten.
- Formulareinstellungen werden im lokalen Speicher des Browsers statt in Cookies gespeichert.

[Alle Änderungen in MeTube](https://github.com/alexta69/metube/compare/2026.09.29...2026.10.20)`,
    pl_PL: `- Aktualizuje MeTube do 2026.10.20. Podczas pobierania przestaje ufać certyfikatom skompromitowanego urzędu certyfikacji (eMudhra).
- Listę odtwarzania można przejrzeć i wybrać pojedyncze pozycje przed dodaniem ich do kolejki.
- „Wyczyść nieudane” prosi o potwierdzenie przed usunięciem nieudanych wierszy.
- Pobrane fragmenty zachowują obraz.
- Pobieranie, którego nie udało się rozpocząć, jest oznaczane jako nieudane zamiast zawieszać się w kolejce, a anulowania wykonane podczas dodawania listy odtwarzania są zachowywane.
- Ustawienia formularza są przechowywane w pamięci lokalnej przeglądarki zamiast w plikach cookie.

[Wszystkie zmiany w MeTube](https://github.com/alexta69/metube/compare/2026.09.29...2026.10.20)`,
    fr_FR: `- Met à jour MeTube vers 2026.10.20. Ne fait plus confiance, lors des téléchargements, aux certificats d'une autorité de certification compromise (eMudhra).
- Une liste de lecture peut être parcourue et certaines entrées choisies avant leur mise en file d'attente.
- Effacer les échecs demande une confirmation avant de supprimer les lignes en échec.
- Les téléchargements d'extraits conservent leur vidéo.
- Un téléchargement qui ne parvient pas à démarrer est affiché en échec au lieu de rester bloqué dans la file, et les annulations faites pendant l'ajout d'une liste de lecture sont conservées.
- Les réglages du formulaire sont conservés dans le stockage local du navigateur plutôt que dans des cookies.

[Tous les changements de MeTube](https://github.com/alexta69/metube/compare/2026.09.29...2026.10.20)`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
