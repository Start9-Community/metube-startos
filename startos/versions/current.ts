import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.7.12:0',
  releaseNotes: {
    en_US: `Updated MeTube to 2026.7.12.

- Hardens the download lifecycle, subscriptions, and web UI against unexpected failures.
- Honors the output template when downloading a whole channel.
- No longer marks a subscription as broken when every entry is filtered out for having already been downloaded.
- Fixes saving download state on NFS and other storage where atomic writes are rejected, and restricts the state file to owner-only permissions.
- Refreshes dependencies.

Full release notes: https://github.com/alexta69/metube/releases/tag/2026.07.12`,
    es_ES: `Actualiza MeTube a 2026.7.12.

- Refuerza el ciclo de vida de las descargas, las suscripciones y la interfaz web frente a fallos inesperados.
- Respeta la plantilla de salida al descargar un canal completo.
- Ya no marca una suscripción como defectuosa cuando todas las entradas se filtran por haberse descargado antes.
- Corrige el guardado del estado de las descargas en NFS y otros almacenamientos que rechazan las escrituras atómicas, y restringe el archivo de estado a permisos exclusivos del propietario.
- Actualiza las dependencias.

Notas de la versión completas: https://github.com/alexta69/metube/releases/tag/2026.07.12`,
    de_DE: `Aktualisiert MeTube auf 2026.7.12.

- Härtet den Download-Lebenszyklus, die Abonnements und die Weboberfläche gegen unerwartete Fehler ab.
- Berücksichtigt die Ausgabevorlage beim Herunterladen eines gesamten Kanals.
- Markiert ein Abonnement nicht mehr als fehlerhaft, wenn alle Einträge herausgefiltert werden, weil sie bereits heruntergeladen wurden.
- Behebt das Speichern des Download-Status auf NFS und anderen Speichern, die atomare Schreibvorgänge ablehnen, und beschränkt die Statusdatei auf Berechtigungen nur für den Eigentümer.
- Aktualisiert die Abhängigkeiten.

Vollständige Versionshinweise: https://github.com/alexta69/metube/releases/tag/2026.07.12`,
    pl_PL: `Aktualizuje MeTube do 2026.7.12.

- Wzmacnia cykl życia pobierania, subskrypcje oraz interfejs sieciowy na wypadek nieoczekiwanych awarii.
- Uwzględnia szablon nazwy pliku podczas pobierania całego kanału.
- Nie oznacza już subskrypcji jako uszkodzonej, gdy wszystkie wpisy zostaną odfiltrowane z powodu wcześniejszego pobrania.
- Naprawia zapisywanie stanu pobierania na NFS i innych nośnikach odrzucających zapisy atomowe oraz ogranicza plik stanu do uprawnień wyłącznie właściciela.
- Odświeża zależności.

Pełne informacje o wydaniu: https://github.com/alexta69/metube/releases/tag/2026.07.12`,
    fr_FR: `Met à jour MeTube vers 2026.7.12.

- Renforce le cycle de vie des téléchargements, les abonnements et l'interface web face aux défaillances inattendues.
- Respecte le modèle de sortie lors du téléchargement d'une chaîne entière.
- Ne marque plus un abonnement comme défectueux lorsque toutes les entrées sont filtrées parce qu'elles ont déjà été téléchargées.
- Corrige l'enregistrement de l'état des téléchargements sur NFS et les autres stockages qui refusent les écritures atomiques, et restreint le fichier d'état aux permissions du seul propriétaire.
- Actualise les dépendances.

Notes de version complètes : https://github.com/alexta69/metube/releases/tag/2026.07.12`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
