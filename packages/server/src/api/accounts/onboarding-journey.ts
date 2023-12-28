export default (templateID) => {
  return {
    name: 'onboarding',
    nodes: [
      {
        id: '409e8310-d934-46db-8498-c1540eec5d7b',
        data: {
          stepId: '00000000-0000-0000-0000-000000000000',
        },
        type: 'start',
        position: {
          x: 0,
          y: 0,
        },
        selected: false,
      },
      {
        id: 'aa364698-9648-4595-ac98-a8a816abb863',
        data: {
          type: 'tracker',
          stepId: '00000000-0000-0000-0000-000000000000',
          tracker: {
            fields: [
              {
                name: 'page',
                type: 'Number',
                value: '0',
              },
              {
                name: 'step',
                type: 'Number',
                value: '0',
              },
            ],
            trackerId: 'ONBOARDING_TRACKER',
            visibility: 'show',
            trackerTemplate: {
              id: templateID,
              name: 'onboarding-template',
            },
          },
          needsCheck: false,
        },
        type: 'tracker',
        position: {
          x: 0,
          y: 125,
        },
        selected: false,
      },
      {
        id: '3b12fc9b-a129-41fe-85e2-65cd6db512e4',
        data: {
          type: 'waitUntil',
          stepId: '00000000-0000-0000-0000-000000000000',
          branches: [
            {
              id: 'acfbddd1-6b6f-4a77-90cb-0a3c2d6c52f2',
              type: 'event',
              conditions: [
                {
                  event: 'onboarding-start',
                  trackerId: 'ONBOARDING_TRACKER',
                  providerType: 'tracker',
                  relationToNext: 'or',
                },
              ],
            },
          ],
        },
        type: 'waitUntil',
        position: {
          x: 0,
          y: 250,
        },
        selected: false,
      },
      {
        id: 'b0d46fbe-e377-4ac9-b847-8ea4be9b0aab',
        data: {
          type: 'tracker',
          stepId: '00000000-0000-0000-0000-000000000000',
          tracker: {
            fields: [
              {
                name: 'page',
                type: 'Number',
                value: '1',
              },
              {
                name: 'step',
                type: 'Number',
                value: '0',
              },
            ],
            trackerId: 'ONBOARDING_TRACKER',
            visibility: 'show',
            trackerTemplate: {
              id: templateID,
              name: 'onboarding-template',
            },
          },
          needsCheck: false,
        },
        type: 'tracker',
        position: {
          x: 0,
          y: 375,
        },
        selected: false,
      },
      {
        id: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        data: {
          type: 'waitUntil',
          stepId: '00000000-0000-0000-0000-000000000000',
          branches: [
            {
              id: '114b1dd5-d42d-428f-92e7-c701c905bcb2',
              type: 'event',
              conditions: [
                {
                  event: 'reset',
                  trackerId: 'ONBOARDING_TRACKER',
                  providerType: 'tracker',
                  relationToNext: 'or',
                },
              ],
            },
            {
              id: '2f4d9a38-5980-4d49-92ec-fad9bf6f781d',
              type: 'event',
              conditions: [
                {
                  event: 'proceed-to-drag-email-step',
                  trackerId: 'ONBOARDING_TRACKER',
                  providerType: 'tracker',
                  relationToNext: 'or',
                },
              ],
            },
            {
              id: 'bc8e27b4-934c-45a6-99cf-84819d698a83',
              type: 'event',
              conditions: [
                {
                  event: 'proceed-to-setting-panel-step',
                  trackerId: 'ONBOARDING_TRACKER',
                  providerType: 'tracker',
                  relationToNext: 'or',
                },
              ],
            },
            {
              id: 'efad1ec4-63d6-442c-a776-74dfa800e0e4',
              type: 'event',
              conditions: [
                {
                  event: 'proceed-to-select-template-step',
                  trackerId: 'ONBOARDING_TRACKER',
                  providerType: 'tracker',
                  relationToNext: 'or',
                },
              ],
            },
            {
              id: 'b6c68860-465b-4752-98a9-6ccb01008f9e',
              type: 'event',
              conditions: [
                {
                  event: 'proceed-to-save-settings-step',
                  trackerId: 'ONBOARDING_TRACKER',
                  providerType: 'tracker',
                  relationToNext: 'or',
                },
              ],
            },
            {
              id: '1408a711-332c-412f-91e5-ac2a98fd4503',
              type: 'event',
              conditions: [
                {
                  event: 'proceed-to-trigger-step',
                  trackerId: 'ONBOARDING_TRACKER',
                  providerType: 'tracker',
                  relationToNext: 'or',
                },
              ],
            },
            {
              id: '43a4dd78-1c77-4b59-90db-15a6935a0c07',
              type: 'event',
              conditions: [
                {
                  event: 'proceed-to-modify-trigger-step',
                  trackerId: 'ONBOARDING_TRACKER',
                  providerType: 'tracker',
                  relationToNext: 'or',
                },
              ],
            },
            {
              id: '0b23380b-0f3b-4fdc-b028-4d4f9985839f',
              type: 'event',
              conditions: [
                {
                  event: 'proceed-to-change-time-step',
                  trackerId: 'ONBOARDING_TRACKER',
                  providerType: 'tracker',
                  relationToNext: 'or',
                },
              ],
            },
            {
              id: '7e2efa65-7b57-4f67-9ac0-9bf126540b2e',
              type: 'event',
              conditions: [
                {
                  event: 'proceed-to-save-trigger-step',
                  trackerId: 'ONBOARDING_TRACKER',
                  providerType: 'tracker',
                  relationToNext: 'or',
                },
              ],
            },
            {
              id: 'ccde5cbb-2b9b-40e6-a180-0bf0fb56e28b',
              type: 'event',
              conditions: [
                {
                  event: 'proceed-to-finish-step',
                  trackerId: 'ONBOARDING_TRACKER',
                  providerType: 'tracker',
                  relationToNext: 'or',
                },
              ],
            },
            {
              id: '4dfbc99e-d7a7-4209-8704-92d0cd1bb883',
              type: 'event',
              conditions: [
                {
                  event: 'show-customers-page',
                  trackerId: 'ONBOARDING_TRACKER',
                  providerType: 'tracker',
                  relationToNext: 'or',
                },
              ],
            },
          ],
        },
        type: 'waitUntil',
        position: {
          x: 0,
          y: 500,
        },
        selected: false,
      },
      {
        id: '3161180f-f1b1-4d8a-841d-dc89682c2a21',
        data: {
          type: 'jumpTo',
          stepId: '00000000-0000-0000-0000-000000000000',
          targetId: 'b0d46fbe-e377-4ac9-b847-8ea4be9b0aab',
        },
        type: 'jumpTo',
        position: {
          x: -2600,
          y: 770,
        },
        selected: false,
      },
      {
        id: 'bc7965cf-cbe6-4155-b7e4-6193b8a4b42a',
        data: {
          type: 'tracker',
          stepId: '00000000-0000-0000-0000-000000000000',
          tracker: {
            fields: [
              {
                name: 'page',
                type: 'Number',
                value: '1',
              },
              {
                name: 'step',
                type: 'Number',
                value: '1',
              },
            ],
            trackerId: 'ONBOARDING_TRACKER',
            visibility: 'show',
            trackerTemplate: {
              id: templateID,
              name: 'onboarding-template',
            },
          },
          needsCheck: false,
        },
        type: 'tracker',
        position: {
          x: -2080,
          y: 770,
        },
        selected: false,
      },
      {
        id: '932d7d05-c3b7-4d59-90b2-33beb30738f0',
        data: {
          type: 'jumpTo',
          stepId: '00000000-0000-0000-0000-000000000000',
          targetId: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        },
        type: 'jumpTo',
        position: {
          x: -2080,
          y: 895,
        },
        selected: false,
      },
      {
        id: 'bf8e2bf5-84a8-49d4-8606-7b0d4109e8d0',
        data: {
          type: 'tracker',
          stepId: '00000000-0000-0000-0000-000000000000',
          tracker: {
            fields: [
              {
                name: 'page',
                type: 'Number',
                value: '1',
              },
              {
                name: 'step',
                type: 'Number',
                value: '2',
              },
            ],
            trackerId: 'ONBOARDING_TRACKER',
            visibility: 'show',
            trackerTemplate: {
              id: templateID,
              name: 'onboarding-template',
            },
          },
          needsCheck: false,
        },
        type: 'tracker',
        position: {
          x: -1560,
          y: 770,
        },
        selected: false,
      },
      {
        id: 'b9ea2abe-896b-45ee-8c24-23117ffdf398',
        data: {
          type: 'jumpTo',
          stepId: '00000000-0000-0000-0000-000000000000',
          targetId: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        },
        type: 'jumpTo',
        position: {
          x: -1560,
          y: 895,
        },
        selected: false,
      },
      {
        id: 'cd42d3a6-4160-4042-a7e0-184042e19b89',
        data: {
          type: 'tracker',
          stepId: '00000000-0000-0000-0000-000000000000',
          tracker: {
            fields: [
              {
                name: 'page',
                type: 'Number',
                value: '1',
              },
              {
                name: 'step',
                type: 'Number',
                value: '3',
              },
            ],
            trackerId: 'ONBOARDING_TRACKER',
            visibility: 'show',
            trackerTemplate: {
              id: templateID,
              name: 'onboarding-template',
            },
          },
          needsCheck: false,
        },
        type: 'tracker',
        position: {
          x: -1040,
          y: 770,
        },
        selected: false,
      },
      {
        id: '778802bf-ca7e-4f63-9249-94c8f22b065c',
        data: {
          type: 'jumpTo',
          stepId: '00000000-0000-0000-0000-000000000000',
          targetId: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        },
        type: 'jumpTo',
        position: {
          x: -1040,
          y: 895,
        },
        selected: false,
      },
      {
        id: 'a0ac08ee-3f95-46a7-b13d-e8027cc13b3e',
        data: {
          type: 'tracker',
          stepId: '00000000-0000-0000-0000-000000000000',
          tracker: {
            fields: [
              {
                name: 'page',
                type: 'Number',
                value: '1',
              },
              {
                name: 'step',
                type: 'Number',
                value: '4',
              },
            ],
            trackerId: 'ONBOARDING_TRACKER',
            visibility: 'show',
            trackerTemplate: {
              id: templateID,
              name: 'onboarding-template',
            },
          },
          needsCheck: false,
        },
        type: 'tracker',
        position: {
          x: -520,
          y: 770,
        },
        selected: false,
      },
      {
        id: '4ab4f2c7-8b02-4fbe-b9fb-1bc6d8453dfa',
        data: {
          type: 'jumpTo',
          stepId: '00000000-0000-0000-0000-000000000000',
          targetId: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        },
        type: 'jumpTo',
        position: {
          x: -520,
          y: 895,
        },
        selected: false,
      },
      {
        id: '4297a18b-0d75-4cd1-8e7f-4c4f58a9a335',
        data: {
          type: 'tracker',
          stepId: '00000000-0000-0000-0000-000000000000',
          tracker: {
            fields: [
              {
                name: 'page',
                type: 'Number',
                value: '1',
              },
              {
                name: 'step',
                type: 'Number',
                value: '5',
              },
            ],
            trackerId: 'ONBOARDING_TRACKER',
            visibility: 'show',
            trackerTemplate: {
              id: templateID,
              name: 'onboarding-template',
            },
          },
          needsCheck: false,
        },
        type: 'tracker',
        position: {
          x: 0,
          y: 770,
        },
        selected: false,
      },
      {
        id: '9202f6af-7067-431c-86da-1fd90f5c7d31',
        data: {
          type: 'jumpTo',
          stepId: '00000000-0000-0000-0000-000000000000',
          targetId: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        },
        type: 'jumpTo',
        position: {
          x: 0,
          y: 895,
        },
        selected: false,
      },
      {
        id: '82445c0b-c585-4ece-8ced-7fb301a38fae',
        data: {
          type: 'tracker',
          stepId: '00000000-0000-0000-0000-000000000000',
          tracker: {
            fields: [
              {
                name: 'page',
                type: 'Number',
                value: '1',
              },
              {
                name: 'step',
                type: 'Number',
                value: '6',
              },
            ],
            trackerId: 'ONBOARDING_TRACKER',
            visibility: 'show',
            trackerTemplate: {
              id: templateID,
              name: 'onboarding-template',
            },
          },
          needsCheck: false,
        },
        type: 'tracker',
        position: {
          x: 520,
          y: 770,
        },
        selected: false,
      },
      {
        id: 'dfb7bab5-ba84-49a7-9d4b-35e035728d7b',
        data: {
          type: 'jumpTo',
          stepId: '00000000-0000-0000-0000-000000000000',
          targetId: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        },
        type: 'jumpTo',
        position: {
          x: 520,
          y: 895,
        },
        selected: false,
      },
      {
        id: '3f59dbc3-3aec-4326-aa1b-e05f92bef5c8',
        data: {
          type: 'tracker',
          stepId: '00000000-0000-0000-0000-000000000000',
          tracker: {
            fields: [
              {
                name: 'page',
                type: 'Number',
                value: '1',
              },
              {
                name: 'step',
                type: 'Number',
                value: '7',
              },
            ],
            trackerId: 'ONBOARDING_TRACKER',
            visibility: 'show',
            trackerTemplate: {
              id: templateID,
              name: 'onboarding-template',
            },
          },
          needsCheck: false,
        },
        type: 'tracker',
        position: {
          x: 1040,
          y: 770,
        },
        selected: false,
      },
      {
        id: 'afc30265-f85d-4e17-87b4-2028f369e3eb',
        data: {
          type: 'jumpTo',
          stepId: '00000000-0000-0000-0000-000000000000',
          targetId: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        },
        type: 'jumpTo',
        position: {
          x: 1040,
          y: 895,
        },
        selected: false,
      },
      {
        id: '763ea2f1-8900-4495-8ea3-634e40f8c3a2',
        data: {
          type: 'tracker',
          stepId: '00000000-0000-0000-0000-000000000000',
          tracker: {
            fields: [
              {
                name: 'page',
                type: 'Number',
                value: '1',
              },
              {
                name: 'step',
                type: 'Number',
                value: '8',
              },
            ],
            trackerId: 'ONBOARDING_TRACKER',
            visibility: 'show',
            trackerTemplate: {
              id: templateID,
              name: 'onboarding-template',
            },
          },
          needsCheck: false,
        },
        type: 'tracker',
        position: {
          x: 1560,
          y: 770,
        },
        selected: false,
      },
      {
        id: '7c0e85db-e3ad-4e67-8722-baa5d6345465',
        data: {
          type: 'jumpTo',
          stepId: '00000000-0000-0000-0000-000000000000',
          targetId: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        },
        type: 'jumpTo',
        position: {
          x: 1560,
          y: 895,
        },
        selected: false,
      },
      {
        id: '0f61d770-7001-47a2-a1d6-2ae6c57c6af7',
        data: {
          type: 'tracker',
          stepId: '00000000-0000-0000-0000-000000000000',
          tracker: {
            fields: [
              {
                name: 'page',
                type: 'Number',
                value: '1',
              },
              {
                name: 'step',
                type: 'Number',
                value: '9',
              },
            ],
            trackerId: 'ONBOARDING_TRACKER',
            visibility: 'show',
            trackerTemplate: {
              id: templateID,
              name: 'onboarding-template',
            },
          },
          needsCheck: false,
        },
        type: 'tracker',
        position: {
          x: 2080,
          y: 770,
        },
        selected: false,
      },
      {
        id: '77f12acd-ab2c-47c8-baab-35bf3a8f6b32',
        data: {
          type: 'jumpTo',
          stepId: '00000000-0000-0000-0000-000000000000',
          targetId: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        },
        type: 'jumpTo',
        position: {
          x: 2080,
          y: 895,
        },
        selected: false,
      },
      {
        id: '073bbeb3-7621-45aa-9388-5e4114d0a5aa',
        data: {
          type: 'tracker',
          stepId: '00000000-0000-0000-0000-000000000000',
          tracker: {
            fields: [
              {
                name: 'page',
                type: 'Number',
                value: '2',
              },
              {
                name: 'step',
                type: 'Number',
                value: '0',
              },
            ],
            trackerId: 'ONBOARDING_TRACKER',
            visibility: 'show',
            trackerTemplate: {
              id: templateID,
              name: 'onboarding-template',
            },
          },
          needsCheck: false,
        },
        type: 'tracker',
        position: {
          x: 2600,
          y: 770,
        },
        selected: false,
      },
      {
        id: 'e0146611-8e73-4972-8fdd-447aa5f03725',
        data: {
          type: 'waitUntil',
          stepId: '00000000-0000-0000-0000-000000000000',
          branches: [
            {
              id: '420e7118-126e-46bd-b151-d96ebfeb08b6',
              type: 'event',
              conditions: [
                {
                  event: 'show-create-journey-page',
                  trackerId: 'ONBOARDING_TRACKER',
                  providerType: 'tracker',
                  relationToNext: 'or',
                },
              ],
            },
            {
              id: 'e6113bb8-cdf8-4225-bb71-62fd9f375dcc',
              type: 'event',
              conditions: [
                {
                  event: 'show-start-journey-page',
                  trackerId: 'ONBOARDING_TRACKER',
                  providerType: 'tracker',
                  relationToNext: 'or',
                },
              ],
            },
          ],
        },
        type: 'waitUntil',
        position: {
          x: 2600,
          y: 895,
        },
        selected: false,
      },
      {
        id: '5ed71893-da80-4f0f-b200-bddbf0250267',
        data: {
          type: 'jumpTo',
          stepId: '00000000-0000-0000-0000-000000000000',
          targetId: 'b0d46fbe-e377-4ac9-b847-8ea4be9b0aab',
        },
        type: 'jumpTo',
        position: {
          x: 2340,
          y: 1165,
        },
        selected: false,
      },
      {
        id: 'a2071f77-ddfe-4fbe-9db5-16a77227e5bd',
        data: {
          type: 'tracker',
          stepId: '00000000-0000-0000-0000-000000000000',
          tracker: {
            fields: [
              {
                name: 'page',
                type: 'Number',
                value: '3',
              },
              {
                name: 'step',
                type: 'Number',
                value: '0',
              },
            ],
            trackerId: 'ONBOARDING_TRACKER',
            visibility: 'show',
            trackerTemplate: {
              id: templateID,
              name: 'onboarding-template',
            },
          },
          needsCheck: false,
        },
        type: 'tracker',
        position: {
          x: 2860,
          y: 1165,
        },
        selected: false,
      },
      {
        id: '59c37782-9f53-411d-955e-53aec6308c0c',
        data: {
          type: 'waitUntil',
          stepId: '00000000-0000-0000-0000-000000000000',
          branches: [
            {
              id: '8a47abf2-64a9-4998-87ae-fd5fa2be1b98',
              type: 'event',
              conditions: [
                {
                  event: 'show-customers-page',
                  trackerId: 'ONBOARDING_TRACKER',
                  providerType: 'tracker',
                  relationToNext: 'or',
                },
              ],
            },
            {
              id: '0e4c2b11-eff1-44c3-a0f3-746e4ca8d25d',
              type: 'event',
              conditions: [
                {
                  event: 'show-track-performance-page',
                  trackerId: 'ONBOARDING_TRACKER',
                  providerType: 'tracker',
                  relationToNext: 'or',
                },
              ],
            },
          ],
        },
        type: 'waitUntil',
        position: {
          x: 2860,
          y: 1290,
        },
        selected: false,
      },
      {
        id: '2ba1bc95-89c0-46c7-be9a-e795e875d8b8',
        data: {
          type: 'jumpTo',
          stepId: '00000000-0000-0000-0000-000000000000',
          targetId: '073bbeb3-7621-45aa-9388-5e4114d0a5aa',
        },
        type: 'jumpTo',
        position: {
          x: 2600,
          y: 1560,
        },
        selected: false,
      },
      {
        id: '4a4de0cf-18ab-4f28-bb1d-28d4400c1b02',
        data: {
          type: 'tracker',
          stepId: '00000000-0000-0000-0000-000000000000',
          tracker: {
            fields: [
              {
                name: 'page',
                type: 'Number',
                value: '4',
              },
              {
                name: 'step',
                type: 'Number',
                value: '0',
              },
            ],
            trackerId: 'ONBOARDING_TRACKER',
            visibility: 'show',
            trackerTemplate: {
              id: templateID,
              name: 'onboarding-template',
            },
          },
          needsCheck: false,
        },
        type: 'tracker',
        position: {
          x: 3120,
          y: 1560,
        },
        selected: false,
      },
      {
        id: 'f1fb26df-eced-4a3c-8937-9f19a1bdd877',
        data: {
          type: 'waitUntil',
          stepId: '00000000-0000-0000-0000-000000000000',
          branches: [
            {
              id: 'e539e665-95d6-4dac-97b9-fc9e467023b9',
              type: 'event',
              conditions: [
                {
                  event: 'restart',
                  trackerId: 'ONBOARDING_TRACKER',
                  providerType: 'tracker',
                  relationToNext: 'or',
                },
              ],
            },
          ],
        },
        type: 'waitUntil',
        position: {
          x: 3120,
          y: 1685,
        },
        selected: false,
      },
      {
        id: 'd5595afe-f1b8-4bf1-be3d-0a43868e642d',
        data: {
          type: 'jumpTo',
          stepId: '00000000-0000-0000-0000-000000000000',
          targetId: 'aa364698-9648-4595-ac98-a8a816abb863',
        },
        type: 'jumpTo',
        position: {
          x: 3120,
          y: 1810,
        },
        selected: false,
      },
    ],
    edges: [
      {
        id: 'e409e8310-d934-46db-8498-c1540eec5d7b-aa364698-9648-4595-ac98-a8a816abb863',
        type: 'primary',
        source: '409e8310-d934-46db-8498-c1540eec5d7b',
        target: 'aa364698-9648-4595-ac98-a8a816abb863',
      },
      {
        id: 'aa364698-9648-4595-ac98-a8a816abb863-3b12fc9b-a129-41fe-85e2-65cd6db512e4',
        type: 'primary',
        source: 'aa364698-9648-4595-ac98-a8a816abb863',
        target: '3b12fc9b-a129-41fe-85e2-65cd6db512e4',
      },
      {
        id: 'bacfbddd1-6b6f-4a77-90cb-0a3c2d6c52f2',
        data: {
          type: 'branch',
          branch: {
            id: 'acfbddd1-6b6f-4a77-90cb-0a3c2d6c52f2',
            type: 'event',
            conditions: [
              {
                event: 'onboarding-start',
                trackerId: 'ONBOARDING_TRACKER',
                providerType: 'tracker',
                relationToNext: 'or',
              },
            ],
          },
        },
        type: 'branch',
        source: '3b12fc9b-a129-41fe-85e2-65cd6db512e4',
        target: 'b0d46fbe-e377-4ac9-b847-8ea4be9b0aab',
      },
      {
        id: 'b114b1dd5-d42d-428f-92e7-c701c905bcb2',
        data: {
          type: 'branch',
          branch: {
            id: '114b1dd5-d42d-428f-92e7-c701c905bcb2',
            type: 'event',
            conditions: [
              {
                event: 'reset',
                trackerId: 'ONBOARDING_TRACKER',
                providerType: 'tracker',
                relationToNext: 'or',
              },
            ],
          },
        },
        type: 'branch',
        source: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        target: '3161180f-f1b1-4d8a-841d-dc89682c2a21',
      },
      {
        id: 'b2f4d9a38-5980-4d49-92ec-fad9bf6f781d',
        data: {
          type: 'branch',
          branch: {
            id: '2f4d9a38-5980-4d49-92ec-fad9bf6f781d',
            type: 'event',
            conditions: [
              {
                event: 'proceed-to-drag-email-step',
                trackerId: 'ONBOARDING_TRACKER',
                providerType: 'tracker',
                relationToNext: 'or',
              },
            ],
          },
        },
        type: 'branch',
        source: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        target: 'bc7965cf-cbe6-4155-b7e4-6193b8a4b42a',
      },
      {
        id: 'bbc8e27b4-934c-45a6-99cf-84819d698a83',
        data: {
          type: 'branch',
          branch: {
            id: 'bc8e27b4-934c-45a6-99cf-84819d698a83',
            type: 'event',
            conditions: [
              {
                event: 'proceed-to-setting-panel-step',
                trackerId: 'ONBOARDING_TRACKER',
                providerType: 'tracker',
                relationToNext: 'or',
              },
            ],
          },
        },
        type: 'branch',
        source: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        target: 'bf8e2bf5-84a8-49d4-8606-7b0d4109e8d0',
      },
      {
        id: 'befad1ec4-63d6-442c-a776-74dfa800e0e4',
        data: {
          type: 'branch',
          branch: {
            id: 'efad1ec4-63d6-442c-a776-74dfa800e0e4',
            type: 'event',
            conditions: [
              {
                event: 'proceed-to-select-template-step',
                trackerId: 'ONBOARDING_TRACKER',
                providerType: 'tracker',
                relationToNext: 'or',
              },
            ],
          },
        },
        type: 'branch',
        source: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        target: 'cd42d3a6-4160-4042-a7e0-184042e19b89',
      },
      {
        id: 'bb6c68860-465b-4752-98a9-6ccb01008f9e',
        data: {
          type: 'branch',
          branch: {
            id: 'b6c68860-465b-4752-98a9-6ccb01008f9e',
            type: 'event',
            conditions: [
              {
                event: 'proceed-to-save-settings-step',
                trackerId: 'ONBOARDING_TRACKER',
                providerType: 'tracker',
                relationToNext: 'or',
              },
            ],
          },
        },
        type: 'branch',
        source: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        target: 'a0ac08ee-3f95-46a7-b13d-e8027cc13b3e',
      },
      {
        id: 'b1408a711-332c-412f-91e5-ac2a98fd4503',
        data: {
          type: 'branch',
          branch: {
            id: '1408a711-332c-412f-91e5-ac2a98fd4503',
            type: 'event',
            conditions: [
              {
                event: 'proceed-to-trigger-step',
                trackerId: 'ONBOARDING_TRACKER',
                providerType: 'tracker',
                relationToNext: 'or',
              },
            ],
          },
        },
        type: 'branch',
        source: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        target: '4297a18b-0d75-4cd1-8e7f-4c4f58a9a335',
      },
      {
        id: 'b43a4dd78-1c77-4b59-90db-15a6935a0c07',
        data: {
          type: 'branch',
          branch: {
            id: '43a4dd78-1c77-4b59-90db-15a6935a0c07',
            type: 'event',
            conditions: [
              {
                event: 'proceed-to-modify-trigger-step',
                trackerId: 'ONBOARDING_TRACKER',
                providerType: 'tracker',
                relationToNext: 'or',
              },
            ],
          },
        },
        type: 'branch',
        source: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        target: '82445c0b-c585-4ece-8ced-7fb301a38fae',
      },
      {
        id: 'b0b23380b-0f3b-4fdc-b028-4d4f9985839f',
        data: {
          type: 'branch',
          branch: {
            id: '0b23380b-0f3b-4fdc-b028-4d4f9985839f',
            type: 'event',
            conditions: [
              {
                event: 'proceed-to-change-time-step',
                trackerId: 'ONBOARDING_TRACKER',
                providerType: 'tracker',
                relationToNext: 'or',
              },
            ],
          },
        },
        type: 'branch',
        source: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        target: '3f59dbc3-3aec-4326-aa1b-e05f92bef5c8',
      },
      {
        id: 'b7e2efa65-7b57-4f67-9ac0-9bf126540b2e',
        data: {
          type: 'branch',
          branch: {
            id: '7e2efa65-7b57-4f67-9ac0-9bf126540b2e',
            type: 'event',
            conditions: [
              {
                event: 'proceed-to-save-trigger-step',
                trackerId: 'ONBOARDING_TRACKER',
                providerType: 'tracker',
                relationToNext: 'or',
              },
            ],
          },
        },
        type: 'branch',
        source: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        target: '763ea2f1-8900-4495-8ea3-634e40f8c3a2',
      },
      {
        id: 'bccde5cbb-2b9b-40e6-a180-0bf0fb56e28b',
        data: {
          type: 'branch',
          branch: {
            id: 'ccde5cbb-2b9b-40e6-a180-0bf0fb56e28b',
            type: 'event',
            conditions: [
              {
                event: 'proceed-to-finish-step',
                trackerId: 'ONBOARDING_TRACKER',
                providerType: 'tracker',
                relationToNext: 'or',
              },
            ],
          },
        },
        type: 'branch',
        source: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        target: '0f61d770-7001-47a2-a1d6-2ae6c57c6af7',
      },
      {
        id: 'b4dfbc99e-d7a7-4209-8704-92d0cd1bb883',
        data: {
          type: 'branch',
          branch: {
            id: '4dfbc99e-d7a7-4209-8704-92d0cd1bb883',
            type: 'event',
            conditions: [
              {
                event: 'show-customers-page',
                trackerId: 'ONBOARDING_TRACKER',
                providerType: 'tracker',
                relationToNext: 'or',
              },
            ],
          },
        },
        type: 'branch',
        source: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        target: '073bbeb3-7621-45aa-9388-5e4114d0a5aa',
      },
      {
        id: 'ce04ca28-7211-4a48-950b-d9412d0eb082-3161180f-f1b1-4d8a-841d-dc89682c2a21',
        type: 'primary',
        source: 'ce04ca28-7211-4a48-950b-d9412d0eb082',
        target: '3161180f-f1b1-4d8a-841d-dc89682c2a21',
      },
      {
        id: 'bc7965cf-cbe6-4155-b7e4-6193b8a4b42a-932d7d05-c3b7-4d59-90b2-33beb30738f0',
        type: 'primary',
        source: 'bc7965cf-cbe6-4155-b7e4-6193b8a4b42a',
        target: '932d7d05-c3b7-4d59-90b2-33beb30738f0',
      },
      {
        id: 'bf8e2bf5-84a8-49d4-8606-7b0d4109e8d0-b9ea2abe-896b-45ee-8c24-23117ffdf398',
        type: 'primary',
        source: 'bf8e2bf5-84a8-49d4-8606-7b0d4109e8d0',
        target: 'b9ea2abe-896b-45ee-8c24-23117ffdf398',
      },
      {
        id: 'cd42d3a6-4160-4042-a7e0-184042e19b89-778802bf-ca7e-4f63-9249-94c8f22b065c',
        type: 'primary',
        source: 'cd42d3a6-4160-4042-a7e0-184042e19b89',
        target: '778802bf-ca7e-4f63-9249-94c8f22b065c',
      },
      {
        id: 'a0ac08ee-3f95-46a7-b13d-e8027cc13b3e-4ab4f2c7-8b02-4fbe-b9fb-1bc6d8453dfa',
        type: 'primary',
        source: 'a0ac08ee-3f95-46a7-b13d-e8027cc13b3e',
        target: '4ab4f2c7-8b02-4fbe-b9fb-1bc6d8453dfa',
      },
      {
        id: '4297a18b-0d75-4cd1-8e7f-4c4f58a9a335-9202f6af-7067-431c-86da-1fd90f5c7d31',
        type: 'primary',
        source: '4297a18b-0d75-4cd1-8e7f-4c4f58a9a335',
        target: '9202f6af-7067-431c-86da-1fd90f5c7d31',
      },
      {
        id: '82445c0b-c585-4ece-8ced-7fb301a38fae-dfb7bab5-ba84-49a7-9d4b-35e035728d7b',
        type: 'primary',
        source: '82445c0b-c585-4ece-8ced-7fb301a38fae',
        target: 'dfb7bab5-ba84-49a7-9d4b-35e035728d7b',
      },
      {
        id: '3f59dbc3-3aec-4326-aa1b-e05f92bef5c8-afc30265-f85d-4e17-87b4-2028f369e3eb',
        type: 'primary',
        source: '3f59dbc3-3aec-4326-aa1b-e05f92bef5c8',
        target: 'afc30265-f85d-4e17-87b4-2028f369e3eb',
      },
      {
        id: 'eb0d46fbe-e377-4ac9-b847-8ea4be9b0aab-c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
        type: 'primary',
        source: 'b0d46fbe-e377-4ac9-b847-8ea4be9b0aab',
        target: 'c6bfea75-e3c5-48cb-ada3-52ac55dc2bcc',
      },
      {
        id: '763ea2f1-8900-4495-8ea3-634e40f8c3a2-7c0e85db-e3ad-4e67-8722-baa5d6345465',
        type: 'primary',
        source: '763ea2f1-8900-4495-8ea3-634e40f8c3a2',
        target: '7c0e85db-e3ad-4e67-8722-baa5d6345465',
      },
      {
        id: '0f61d770-7001-47a2-a1d6-2ae6c57c6af7-77f12acd-ab2c-47c8-baab-35bf3a8f6b32',
        type: 'primary',
        source: '0f61d770-7001-47a2-a1d6-2ae6c57c6af7',
        target: '77f12acd-ab2c-47c8-baab-35bf3a8f6b32',
      },
      {
        id: 'e073bbeb3-7621-45aa-9388-5e4114d0a5aa-e0146611-8e73-4972-8fdd-447aa5f03725',
        type: 'primary',
        source: '073bbeb3-7621-45aa-9388-5e4114d0a5aa',
        target: 'e0146611-8e73-4972-8fdd-447aa5f03725',
      },
      {
        id: 'b420e7118-126e-46bd-b151-d96ebfeb08b6',
        data: {
          type: 'branch',
          branch: {
            id: '420e7118-126e-46bd-b151-d96ebfeb08b6',
            type: 'event',
            conditions: [
              {
                event: 'show-create-journey-page',
                trackerId: 'ONBOARDING_TRACKER',
                providerType: 'tracker',
                relationToNext: 'or',
              },
            ],
          },
        },
        type: 'branch',
        source: 'e0146611-8e73-4972-8fdd-447aa5f03725',
        target: '5ed71893-da80-4f0f-b200-bddbf0250267',
      },
      {
        id: 'be6113bb8-cdf8-4225-bb71-62fd9f375dcc',
        data: {
          type: 'branch',
          branch: {
            id: 'e6113bb8-cdf8-4225-bb71-62fd9f375dcc',
            type: 'event',
            conditions: [
              {
                event: 'show-start-journey-page',
                trackerId: 'ONBOARDING_TRACKER',
                providerType: 'tracker',
                relationToNext: 'or',
              },
            ],
          },
        },
        type: 'branch',
        source: 'e0146611-8e73-4972-8fdd-447aa5f03725',
        target: 'a2071f77-ddfe-4fbe-9db5-16a77227e5bd',
      },
      {
        id: 'a2071f77-ddfe-4fbe-9db5-16a77227e5bd-59c37782-9f53-411d-955e-53aec6308c0c',
        type: 'primary',
        source: 'a2071f77-ddfe-4fbe-9db5-16a77227e5bd',
        target: '59c37782-9f53-411d-955e-53aec6308c0c',
      },
      {
        id: 'b8a47abf2-64a9-4998-87ae-fd5fa2be1b98',
        data: {
          type: 'branch',
          branch: {
            id: '8a47abf2-64a9-4998-87ae-fd5fa2be1b98',
            type: 'event',
            conditions: [
              {
                event: 'show-customers-page',
                trackerId: 'ONBOARDING_TRACKER',
                providerType: 'tracker',
                relationToNext: 'or',
              },
            ],
          },
        },
        type: 'branch',
        source: '59c37782-9f53-411d-955e-53aec6308c0c',
        target: '2ba1bc95-89c0-46c7-be9a-e795e875d8b8',
      },
      {
        id: 'b0e4c2b11-eff1-44c3-a0f3-746e4ca8d25d',
        data: {
          type: 'branch',
          branch: {
            id: '0e4c2b11-eff1-44c3-a0f3-746e4ca8d25d',
            type: 'event',
            conditions: [
              {
                event: 'show-track-performance-page',
                trackerId: 'ONBOARDING_TRACKER',
                providerType: 'tracker',
                relationToNext: 'or',
              },
            ],
          },
        },
        type: 'branch',
        source: '59c37782-9f53-411d-955e-53aec6308c0c',
        target: '4a4de0cf-18ab-4f28-bb1d-28d4400c1b02',
      },
      {
        id: 'e4a4de0cf-18ab-4f28-bb1d-28d4400c1b02-f1fb26df-eced-4a3c-8937-9f19a1bdd877',
        type: 'primary',
        source: '4a4de0cf-18ab-4f28-bb1d-28d4400c1b02',
        target: 'f1fb26df-eced-4a3c-8937-9f19a1bdd877',
      },
      {
        id: 'be539e665-95d6-4dac-97b9-fc9e467023b9',
        data: {
          type: 'branch',
          branch: {
            id: 'e539e665-95d6-4dac-97b9-fc9e467023b9',
            type: 'event',
            conditions: [
              {
                event: 'restart',
                trackerId: 'ONBOARDING_TRACKER',
                providerType: 'tracker',
                relationToNext: 'or',
              },
            ],
          },
        },
        type: 'branch',
        source: 'f1fb26df-eced-4a3c-8937-9f19a1bdd877',
        target: 'd5595afe-f1b8-4bf1-be3d-0a43868e642d',
      },
    ],
    segments: {
      type: 'allCustomers',
    },
    isDynamic: true,
    isActive: false,
    isPaused: false,
    isStopped: false,
    isDeleted: false,
  };
};
