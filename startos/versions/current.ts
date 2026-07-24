import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.7.21:1',
  releaseNotes: {
    en_US: `Updated MeTube to 2026.7.21.

- Hardens the download lifecycle, subscriptions, and web UI against unexpected failures.
- Honors the output template when downloading a whole channel.
- No longer marks a subscription as broken when every entry is filtered out for having already been downloaded.
- Fixes saving download state on NFS and other storage where atomic writes are rejected, and restricts the state file to owner-only permissions.
- Picks up the maintenance releases published through 2026.07.21, plus dependency refreshes.
- Migrates the package to start-sdk 2.0 (requires StartOS 0.4.0-beta.10 or later).

Full release notes: https://github.com/alexta69/metube/releases/tag/2026.07.21`,
    es_ES: `Actualiza MeTube a 2026.7.21.

- Refuerza el ciclo de vida de las descargas, las suscripciones y la interfaz web frente a fallos inesperados.
- Respeta la plantilla de salida al descargar un canal completo.
- Ya no marca una suscripción como defectuosa cuando todas las entradas se filtran por haberse descargado antes.
- Corrige el guardado del estado de las descargas en NFS y otros almacenamientos que rechazan las escrituras atómicas, y restringe el archivo de estado a permisos exclusivos del propietario.
- Incorpora las versiones de mantenimiento publicadas hasta la 2026.07.21, además de actualizaciones de dependencias.
- Migra el paquete a start-sdk 2.0 (requiere StartOS 0.4.0-beta.10 o posterior).

Notas de la versión completas: https://github.com/alexta69/metube/releases/tag/2026.07.21`,
    de_DE: `Aktualisiert MeTube auf 2026.7.21.

- Härtet den Download-Lebenszyklus, die Abonnements und die Weboberfläche gegen unerwartete Fehler ab.
- Berücksichtigt die Ausgabevorlage beim Herunterladen eines gesamten Kanals.
- Markiert ein Abonnement nicht mehr als fehlerhaft, wenn alle Einträge herausgefiltert werden, weil sie bereits heruntergeladen wurden.
- Behebt das Speichern des Download-Status auf NFS und anderen Speichern, die atomare Schreibvorgänge ablehnen, und beschränkt die Statusdatei auf Berechtigungen nur für den Eigentümer.
- Übernimmt die bis 2026.07.21 veröffentlichten Wartungsversionen sowie aktualisierte Abhängigkeiten.
- Stellt das Paket auf start-sdk 2.0 um (erfordert StartOS 0.4.0-beta.10 oder neuer).

Vollständige Versionshinweise: https://github.com/alexta69/metube/releases/tag/2026.07.21`,
    pl_PL: `Aktualizuje MeTube do 2026.7.21.

- Wzmacnia cykl życia pobierania, subskrypcje oraz interfejs sieciowy na wypadek nieoczekiwanych awarii.
- Uwzględnia szablon nazwy pliku podczas pobierania całego kanału.
- Nie oznacza już subskrypcji jako uszkodzonej, gdy wszystkie wpisy zostaną odfiltrowane z powodu wcześniejszego pobrania.
- Naprawia zapisywanie stanu pobierania na NFS i innych nośnikach odrzucających zapisy atomowe oraz ogranicza plik stanu do uprawnień wyłącznie właściciela.
- Obejmuje wydania konserwacyjne opublikowane do 2026.07.21 oraz odświeżone zależności.
- Przenosi pakiet na start-sdk 2.0 (wymaga StartOS 0.4.0-beta.10 lub nowszego).

Pełne informacje o wydaniu: https://github.com/alexta69/metube/releases/tag/2026.07.21`,
    fr_FR: `Met à jour MeTube vers 2026.7.21.

- Renforce le cycle de vie des téléchargements, les abonnements et l'interface web face aux défaillances inattendues.
- Respecte le modèle de sortie lors du téléchargement d'une chaîne entière.
- Ne marque plus un abonnement comme défectueux lorsque toutes les entrées sont filtrées parce qu'elles ont déjà été téléchargées.
- Corrige l'enregistrement de l'état des téléchargements sur NFS et les autres stockages qui refusent les écritures atomiques, et restreint le fichier d'état aux permissions du seul propriétaire.
- Intègre les versions de maintenance publiées jusqu'au 2026.07.21, ainsi que des mises à jour de dépendances.
- Fait passer le paquet à start-sdk 2.0 (nécessite StartOS 0.4.0-beta.10 ou une version ultérieure).

Notes de version complètes : https://github.com/alexta69/metube/releases/tag/2026.07.21`,
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
