import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '2026.4.28:1',
  releaseNotes: {
    en_US:
      'The web UI now requires a password — set it with the new "Set Web UI Password" action (MeTube has no login of its own). Downloads default to local storage, with an optional File Browser subfolder. The download queue and history now live on the backed-up volume. Updated start-sdk to 1.5.3.',
    es_ES:
      'La interfaz web ahora requiere una contraseña: establézcala con la nueva acción "Establecer contraseña de la interfaz web" (MeTube no tiene inicio de sesión propio). Las descargas usan el almacenamiento local de forma predeterminada, con una subcarpeta opcional de File Browser. La cola y el historial de descargas ahora se guardan en el volumen incluido en las copias de seguridad. Se actualizó start-sdk a 1.5.3.',
    de_DE:
      'Die Weboberfläche erfordert jetzt ein Passwort – legen Sie es mit der neuen Aktion „Web-UI-Passwort festlegen" fest (MeTube hat keinen eigenen Login). Downloads verwenden standardmäßig den lokalen Speicher, mit einem optionalen File-Browser-Unterordner. Download-Warteschlange und -Verlauf liegen nun auf dem gesicherten Volume. start-sdk auf 1.5.3 aktualisiert.',
    pl_PL:
      'Interfejs webowy wymaga teraz hasła — ustaw je nową akcją „Ustaw hasło interfejsu webowego" (MeTube nie ma własnego logowania). Pobrane pliki domyślnie trafiają do magazynu lokalnego, z opcjonalnym podfolderem File Browser. Kolejka i historia pobierania są teraz na kopiowanym wolumenie. Zaktualizowano start-sdk do 1.5.3.',
    fr_FR:
      'L’interface web nécessite désormais un mot de passe — définissez-le avec la nouvelle action « Définir le mot de passe de l’interface web » (MeTube n’a pas de connexion propre). Les téléchargements utilisent le stockage local par défaut, avec un sous-dossier File Browser optionnel. La file d’attente et l’historique des téléchargements sont désormais sur le volume sauvegardé. start-sdk mis à jour vers 1.5.3.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
