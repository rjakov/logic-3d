export const actions = [
    {
        id: '8e859f9e-75a8-4f26-8554-487b9b28ee7d',
        title: 'Set car wheels [Any]',
        arguments: [],
        depricated: false
    },
    {
        id: 'f2ee152b-59ba-46cf-a5c4-b1cefb8c1b53',
        title: 'Set material [Any]',
        arguments: [
            {
                name: 'object3d',
                label: 'Object3d',
                controlType: 'autocompleteObject3d'
            },
            {
                name: 'material',
                label: 'Material',
                controlType: 'autocompleteMaterial'
            }
        ],
        depricated: false
    },
    {
        id: '5eab422e-448e-40f7-9bd2-917d8fb897b4',
        title: 'Set objects menu material [Any]',
        depricated: false
    },
    {
        id: '118cdd5d-13e7-472a-aeb4-43f74b72ee16',
        title: 'Change test object [Any]',
        depricated: false,
        arguments: []
    },
    {
        id: 'abc9be47-8a21-4a24-b2fc-569dfd8d5d26',
        title: 'Change car [Any]',
        depricated: false
    },
    {
        id: 'cffb8e04-66d9-4e32-bb87-97c9526488d0',
        title: 'Set metal body ao texture [Verge3d]',
        depricated: false
    },
    {
        id: '64c79c30-111a-4b73-af82-e78d2d3bde48',
        title: 'Change armrest (ues) [Any]',
        depricated: false
    },
    {
        id: '4889f97f-6fae-43d0-a695-ab02c7b66675',
        title: 'Set objects ao texture [Verge3d]',
        depricated: false
    },
    {
        id: '33204c40-2060-43f0-9632-ecc3f902e238',
        title: 'Switch show hide objects [Any]',
        depricated: false,
        arguments: [
            {
                name: 'hiddenObjects',
                label: 'Hide Objects',
                controlType: 'dynamicArray',
                dynamicField: {
                    label: 'To Hide Objects',
                    controlType: 'autocompleteObject3d'
                },
                fields: []
            },
            {
                name: 'shownObjects',
                label: 'Show Objects',
                controlType: 'dynamicArray',
                dynamicField: {
                    label: 'To Show Objects',
                    controlType: 'autocompleteObject3d'
                },
                fields: []
            }
        ]
    },
    {
        id: 'ce0f56a6-f1f5-4789-bd7c-1a03b013e417',
        title: 'Show hide objects [Any]',
        depricated: false,
        arguments: [
            {
                name: 'hiddenObjects',
                label: 'Hide Objects',
                controlType: 'dynamicArray',
                dynamicField: {
                    label: 'To Hide Objects',
                    controlType: 'autocompleteObject3d'
                },
                fields: []
            },
            {
                name: 'shownObjects',
                label: 'Show Objects',
                controlType: 'dynamicArray',
                dynamicField: {
                    label: 'To Show Objects',
                    controlType: 'autocompleteObject3d'
                },
                fields: []
            }
        ]
    },
    {
        id: '8a36e3ff-763d-4220-ad4d-700e10f3e972',
        title: 'Toggle objects visibility [Any]',
        depricated: false
    },
    {
        id: '4745d7f2-4908-47ec-a648-7572cce652e8',
        title: 'Set material colors [Verge3d]',
        depricated: false
    },
    {
        id: '454590e8-5ae7-483d-9bfe-e0c33a660cd6',
        title: 'Set material values [Verge3d]',
        depricated: false
    },
    {
        id: '914b21e4-7c4a-465b-8ac1-70b7556382b2',
        title: 'Set material texture [Verge3d]',
        depricated: false
    },
    {
        id: '9aad4232-e39c-48c7-876d-45d5293cb54d',
        title: 'Toggle material [Any]',
        depricated: false
    },
    {
        id: '94351714-b5d8-4651-bedf-e087873eda1a',
        title: 'Hide objects [Any]',
        depricated: false
    },
    {
        id: 'fa9e0841-9cda-4f5c-988b-86e9684892b1',
        title: 'Toggle Window And Mezzanine [Garage App]',
        depricated: false
    },
    {
        id: '3530e770-908d-422c-8981-cd03204a1037',
        title: 'Shift Walls [Garage App]',
        depricated: false
    },
    {
        id: 'ca0774f1-a6f9-4902-86ac-badbd8ee2442',
        title: 'Switch Objects',
        depricated: false
    },
    {
        id: 'd0295c08-de97-4a5c-b7fd-f513e0a72604',
        title: 'Load asset',
        depricated: false,
        arguments: []
    },
    {
        id: 'djeo349j-p3k5-h1h8-3l6m-de9fg8u76l29',
        title: 'Load new scene by object',
        depricated: false,
        arguments: [
            {
                name: 'object3d',
                label: 'Object3d',
                controlType: 'autocompleteObject3d'
            }
        ]
    },
    {
        id: '1s95d7f2-4158-4s0c-4k48-757d1ce65j4a',
        title: 'Set material colors test',
        depricated: false,
        arguments: [
            {
                name: 'object3d',
                label: 'Object3d',
                controlType: 'autocompleteObject3d'
            },
            {
                name: 'material_color',
                label: 'material_color',
                controlType: 'autocompleteMaterial'
            }
        ]
    },
    {
        id: 'h29l47f2-dh4k-ah65-49wj-l3o11cp3kj02',
        title: 'Change windows',
        depricated: false,
        arguments: [
            {
                name: 'object3d',
                label: 'Object3d',
                controlType: 'autocompleteObject3d'
            },
            {
                name: 'material',
                label: 'material',
                controlType: 'autocompleteMaterial'
            }
        ]
    },
    {
        id: 'hd7e9kw-l3os-p94i-q9el-ldo98e7fo3k6',
        title: 'Choose item with zoom',
        depricated: false,
        arguments: [
            {
                name: 'object3d',
                label: 'Object3d',
                controlType: 'autocompleteObject3d'
            }
        ]
    }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25maWdzL2FjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFhO0lBQy9CO1FBQ0UsRUFBRSxFQUFFLHNDQUFzQztRQUMxQyxLQUFLLEVBQUUsc0JBQXNCO1FBQzdCLFNBQVMsRUFBRSxFQUFFO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxzQ0FBc0M7UUFDMUMsS0FBSyxFQUFFLG9CQUFvQjtRQUMzQixTQUFTLEVBQUU7WUFDVDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLFdBQVcsRUFBRSxzQkFBc0I7YUFDcEM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLFdBQVcsRUFBRSxzQkFBc0I7YUFDcEM7U0FDRjtRQUNELFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsc0NBQXNDO1FBQzFDLEtBQUssRUFBRSxpQ0FBaUM7UUFDeEMsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxzQ0FBc0M7UUFDMUMsS0FBSyxFQUFFLDBCQUEwQjtRQUNqQyxVQUFVLEVBQUUsS0FBSztRQUNqQixTQUFTLEVBQUUsRUFBRTtLQUNkO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsc0NBQXNDO1FBQzFDLEtBQUssRUFBRSxrQkFBa0I7UUFDekIsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFDRDtRQUNFLEVBQUUsRUFBRSxzQ0FBc0M7UUFDMUMsS0FBSyxFQUFFLHFDQUFxQztRQUM1QyxVQUFVLEVBQUUsS0FBSztLQUNsQjtJQUNEO1FBQ0UsRUFBRSxFQUFFLHNDQUFzQztRQUMxQyxLQUFLLEVBQUUsNEJBQTRCO1FBQ25DLFVBQVUsRUFBRSxLQUFLO0tBQ2xC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QUNqQixTQUFTLEVBQUU7WUFDVDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLFdBQVcsRUFBRSxzQkFBc0I7YUFDcEM7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxFQUFFLEVBQUUsc0NBQXNDO1FBQzFDLEtBQUssRUFBRSwwQkFBMEI7UUFDakMsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxVQUFVO2dCQUNqQixXQUFXLEVBQUUsc0JBQXNCO2FBQ3BDO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLGdCQUFnQjtnQkFDdEIsS0FBSyxFQUFFLGdCQUFnQjtnQkFDdkIsV0FBVyxFQUFFLHNCQUFzQjthQUNwQztTQUNGO0tBQ0Y7SUFDRDtRQUNFLEVBQUUsRUFBRSxzQ0FBc0M7UUFDMUMsS0FBSyxFQUFFLGdCQUFnQjtRQUN2QixVQUFVLEVBQUUsS0FBSztRQUNqQixTQUFTLEVBQUU7WUFDVDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLFdBQVcsRUFBRSxzQkFBc0I7YUFDcEM7WUFDRDtnQkFDRSxJQUFJLEVBQUUsVUFBVTtnQkFDaEIsS0FBSyxFQUFFLFVBQVU7Z0JBQ2pCLFdBQVcsRUFBRSxzQkFBc0I7YUFDcEM7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxFQUFFLEVBQUUscUNBQXFDO1FBQ3pDLEtBQUssRUFBRSx1QkFBdUI7UUFDOUIsVUFBVSxFQUFFLEtBQUs7UUFDakIsU0FBUyxFQUFFO1lBQ1Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLEtBQUssRUFBRSxVQUFVO2dCQUNqQixXQUFXLEVBQUUsc0JBQXNCO2FBQ3BDO1NBQ0Y7S0FDRjtDQUNGLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICcuLi9tb2RlbC9hY3Rpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFjdGlvbnM6IEFjdGlvbltdID0gW1xyXG4gIHtcclxuICAgIGlkOiAnOGU4NTlmOWUtNzVhOC00ZjI2LTg1NTQtNDg3YjliMjhlZTdkJyxcclxuICAgIHRpdGxlOiAnU2V0IGNhciB3aGVlbHMgW0FueV0nLFxyXG4gICAgYXJndW1lbnRzOiBbXSxcclxuICAgIGRlcHJpY2F0ZWQ6IGZhbHNlXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2YyZWUxNTJiLTU5YmEtNDZjZi1hNWM0LWIxY2VmYjhjMWI1MycsXHJcbiAgICB0aXRsZTogJ1NldCBtYXRlcmlhbCBbQW55XScsXHJcbiAgICBhcmd1bWVudHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdvYmplY3QzZCcsXHJcbiAgICAgICAgbGFiZWw6ICdPYmplY3QzZCcsXHJcbiAgICAgICAgY29udHJvbFR5cGU6ICdhdXRvY29tcGxldGVPYmplY3QzZCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdtYXRlcmlhbCcsXHJcbiAgICAgICAgbGFiZWw6ICdNYXRlcmlhbCcsXHJcbiAgICAgICAgY29udHJvbFR5cGU6ICdhdXRvY29tcGxldGVNYXRlcmlhbCdcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIGRlcHJpY2F0ZWQ6IGZhbHNlXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzVlYWI0MjJlLTQ0OGUtNDBmNy05YmQyLTkxN2Q4ZmI4OTdiNCcsXHJcbiAgICB0aXRsZTogJ1NldCBvYmplY3RzIG1lbnUgbWF0ZXJpYWwgW0FueV0nLFxyXG4gICAgZGVwcmljYXRlZDogZmFsc2VcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnMTE4Y2RkNWQtMTNlNy00NzJhLWFlYjQtNDNmNzRiNzJlZTE2JyxcclxuICAgIHRpdGxlOiAnQ2hhbmdlIHRlc3Qgb2JqZWN0IFtBbnldJyxcclxuICAgIGRlcHJpY2F0ZWQ6IGZhbHNlLFxyXG4gICAgYXJndW1lbnRzOiBbXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdhYmM5YmU0Ny04YTIxLTRhMjQtYjJmYy01NjlkZmQ4ZDVkMjYnLFxyXG4gICAgdGl0bGU6ICdDaGFuZ2UgY2FyIFtBbnldJyxcclxuICAgIGRlcHJpY2F0ZWQ6IGZhbHNlXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ2NmZmI4ZTA0LTY2ZDktNGUzMi1iYjg3LTk3Yzk1MjY0ODhkMCcsXHJcbiAgICB0aXRsZTogJ1NldCBtZXRhbCBib2R5IGFvIHRleHR1cmUgW1ZlcmdlM2RdJyxcclxuICAgIGRlcHJpY2F0ZWQ6IGZhbHNlXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzY0Yzc5YzMwLTExMWEtNGI3My1hZjgyLWU3OGQyZDNiZGU0OCcsXHJcbiAgICB0aXRsZTogJ0NoYW5nZSBhcm1yZXN0ICh1ZXMpIFtBbnldJyxcclxuICAgIGRlcHJpY2F0ZWQ6IGZhbHNlXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzQ4ODlmOTdmLTZmYWUtNDNkMC1hNjk1LWFiMDJjN2I2NjY3NScsXHJcbiAgICB0aXRsZTogJ1NldCBvYmplY3RzIGFvIHRleHR1cmUgW1ZlcmdlM2RdJyxcclxuICAgIGRlcHJpY2F0ZWQ6IGZhbHNlXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzMzMjA0YzQwLTIwNjAtNDNmMC05NjMyLWVjYzNmOTAyZTIzOCcsXHJcbiAgICB0aXRsZTogJ1N3aXRjaCBzaG93IGhpZGUgb2JqZWN0cyBbQW55XScsXHJcbiAgICBkZXByaWNhdGVkOiBmYWxzZSxcclxuICAgIGFyZ3VtZW50czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ2hpZGRlbk9iamVjdHMnLFxyXG4gICAgICAgIGxhYmVsOiAnSGlkZSBPYmplY3RzJyxcclxuICAgICAgICBjb250cm9sVHlwZTogJ2R5bmFtaWNBcnJheScsXHJcbiAgICAgICAgZHluYW1pY0ZpZWxkOiB7XHJcbiAgICAgICAgICBsYWJlbDogJ1RvIEhpZGUgT2JqZWN0cycsXHJcbiAgICAgICAgICBjb250cm9sVHlwZTogJ2F1dG9jb21wbGV0ZU9iamVjdDNkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmllbGRzOiBbXVxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Nob3duT2JqZWN0cycsXHJcbiAgICAgICAgbGFiZWw6ICdTaG93IE9iamVjdHMnLFxyXG4gICAgICAgIGNvbnRyb2xUeXBlOiAnZHluYW1pY0FycmF5JyxcclxuICAgICAgICBkeW5hbWljRmllbGQ6IHtcclxuICAgICAgICAgIGxhYmVsOiAnVG8gU2hvdyBPYmplY3RzJyxcclxuICAgICAgICAgIGNvbnRyb2xUeXBlOiAnYXV0b2NvbXBsZXRlT2JqZWN0M2QnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaWVsZHM6IFtdXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnY2UwZjU2YTYtZjFmNS00Nzg5LWJkN2MtMWEwM2IwMTNlNDE3JyxcclxuICAgIHRpdGxlOiAnU2hvdyBoaWRlIG9iamVjdHMgW0FueV0nLFxyXG4gICAgZGVwcmljYXRlZDogZmFsc2UsXHJcbiAgICBhcmd1bWVudHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdoaWRkZW5PYmplY3RzJyxcclxuICAgICAgICBsYWJlbDogJ0hpZGUgT2JqZWN0cycsXHJcbiAgICAgICAgY29udHJvbFR5cGU6ICdkeW5hbWljQXJyYXknLFxyXG4gICAgICAgIGR5bmFtaWNGaWVsZDoge1xyXG4gICAgICAgICAgbGFiZWw6ICdUbyBIaWRlIE9iamVjdHMnLFxyXG4gICAgICAgICAgY29udHJvbFR5cGU6ICdhdXRvY29tcGxldGVPYmplY3QzZCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpZWxkczogW11cclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdzaG93bk9iamVjdHMnLFxyXG4gICAgICAgIGxhYmVsOiAnU2hvdyBPYmplY3RzJyxcclxuICAgICAgICBjb250cm9sVHlwZTogJ2R5bmFtaWNBcnJheScsXHJcbiAgICAgICAgZHluYW1pY0ZpZWxkOiB7XHJcbiAgICAgICAgICBsYWJlbDogJ1RvIFNob3cgT2JqZWN0cycsXHJcbiAgICAgICAgICBjb250cm9sVHlwZTogJ2F1dG9jb21wbGV0ZU9iamVjdDNkJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmllbGRzOiBbXVxyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzhhMzZlM2ZmLTc2M2QtNDIyMC1hZDRkLTcwMGUxMGYzZTk3MicsXHJcbiAgICB0aXRsZTogJ1RvZ2dsZSBvYmplY3RzIHZpc2liaWxpdHkgW0FueV0nLFxyXG4gICAgZGVwcmljYXRlZDogZmFsc2VcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNDc0NWQ3ZjItNDkwOC00N2VjLWE2NDgtNzU3MmNjZTY1MmU4JyxcclxuICAgIHRpdGxlOiAnU2V0IG1hdGVyaWFsIGNvbG9ycyBbVmVyZ2UzZF0nLFxyXG4gICAgZGVwcmljYXRlZDogZmFsc2VcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnNDU0NTkwZTgtNWFlNy00ODNkLTliZmUtZTBjMzNhNjYwY2Q2JyxcclxuICAgIHRpdGxlOiAnU2V0IG1hdGVyaWFsIHZhbHVlcyBbVmVyZ2UzZF0nLFxyXG4gICAgZGVwcmljYXRlZDogZmFsc2VcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnOTE0YjIxZTQtN2M0YS00NjViLThhYzEtNzBiNzU1NjM4MmIyJyxcclxuICAgIHRpdGxlOiAnU2V0IG1hdGVyaWFsIHRleHR1cmUgW1ZlcmdlM2RdJyxcclxuICAgIGRlcHJpY2F0ZWQ6IGZhbHNlXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJzlhYWQ0MjMyLWUzOWMtNDhjNy04NzZkLTQ1ZDUyOTNjYjU0ZCcsXHJcbiAgICB0aXRsZTogJ1RvZ2dsZSBtYXRlcmlhbCBbQW55XScsXHJcbiAgICBkZXByaWNhdGVkOiBmYWxzZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICc5NDM1MTcxNC1iNWQ4LTQ2NTEtYmVkZi1lMDg3ODczZWRhMWEnLFxyXG4gICAgdGl0bGU6ICdIaWRlIG9iamVjdHMgW0FueV0nLFxyXG4gICAgZGVwcmljYXRlZDogZmFsc2VcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnZmE5ZTA4NDEtOWNkYS00ZjVjLTk4OGItODZlOTY4NDg5MmIxJyxcclxuICAgIHRpdGxlOiAnVG9nZ2xlIFdpbmRvdyBBbmQgTWV6emFuaW5lIFtHYXJhZ2UgQXBwXScsXHJcbiAgICBkZXByaWNhdGVkOiBmYWxzZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICczNTMwZTc3MC05MDhkLTQyMmMtODk4MS1jZDAzMjA0YTEwMzcnLFxyXG4gICAgdGl0bGU6ICdTaGlmdCBXYWxscyBbR2FyYWdlIEFwcF0nLFxyXG4gICAgZGVwcmljYXRlZDogZmFsc2VcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnY2EwNzc0ZjEtYTZmOS00OTAyLTg2YWMtYmFkYmQ4ZWUyNDQyJyxcclxuICAgIHRpdGxlOiAnU3dpdGNoIE9iamVjdHMnLFxyXG4gICAgZGVwcmljYXRlZDogZmFsc2VcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnZDAyOTVjMDgtZGU5Ny00YTVjLWI3ZmQtZjUxM2UwYTcyNjA0JyxcclxuICAgIHRpdGxlOiAnTG9hZCBhc3NldCcsXHJcbiAgICBkZXByaWNhdGVkOiBmYWxzZSxcclxuICAgIGFyZ3VtZW50czogW11cclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnZGplbzM0OWotcDNrNS1oMWg4LTNsNm0tZGU5Zmc4dTc2bDI5JyxcclxuICAgIHRpdGxlOiAnTG9hZCBuZXcgc2NlbmUgYnkgb2JqZWN0JyxcclxuICAgIGRlcHJpY2F0ZWQ6IGZhbHNlLFxyXG4gICAgYXJndW1lbnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnb2JqZWN0M2QnLFxyXG4gICAgICAgIGxhYmVsOiAnT2JqZWN0M2QnLFxyXG4gICAgICAgIGNvbnRyb2xUeXBlOiAnYXV0b2NvbXBsZXRlT2JqZWN0M2QnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnMXM5NWQ3ZjItNDE1OC00czBjLTRrNDgtNzU3ZDFjZTY1ajRhJyxcclxuICAgIHRpdGxlOiAnU2V0IG1hdGVyaWFsIGNvbG9ycyB0ZXN0JyxcclxuICAgIGRlcHJpY2F0ZWQ6IGZhbHNlLFxyXG4gICAgYXJndW1lbnRzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnb2JqZWN0M2QnLFxyXG4gICAgICAgIGxhYmVsOiAnT2JqZWN0M2QnLFxyXG4gICAgICAgIGNvbnRyb2xUeXBlOiAnYXV0b2NvbXBsZXRlT2JqZWN0M2QnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBuYW1lOiAnbWF0ZXJpYWxfY29sb3InLFxyXG4gICAgICAgIGxhYmVsOiAnbWF0ZXJpYWxfY29sb3InLFxyXG4gICAgICAgIGNvbnRyb2xUeXBlOiAnYXV0b2NvbXBsZXRlTWF0ZXJpYWwnXHJcbiAgICAgIH1cclxuICAgIF1cclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnaDI5bDQ3ZjItZGg0ay1haDY1LTQ5d2otbDNvMTFjcDNrajAyJyxcclxuICAgIHRpdGxlOiAnQ2hhbmdlIHdpbmRvd3MnLFxyXG4gICAgZGVwcmljYXRlZDogZmFsc2UsXHJcbiAgICBhcmd1bWVudHM6IFtcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdvYmplY3QzZCcsXHJcbiAgICAgICAgbGFiZWw6ICdPYmplY3QzZCcsXHJcbiAgICAgICAgY29udHJvbFR5cGU6ICdhdXRvY29tcGxldGVPYmplY3QzZCdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIG5hbWU6ICdtYXRlcmlhbCcsXHJcbiAgICAgICAgbGFiZWw6ICdtYXRlcmlhbCcsXHJcbiAgICAgICAgY29udHJvbFR5cGU6ICdhdXRvY29tcGxldGVNYXRlcmlhbCdcclxuICAgICAgfVxyXG4gICAgXVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdoZDdlOWt3LWwzb3MtcDk0aS1xOWVsLWxkbzk4ZTdmbzNrNicsXHJcbiAgICB0aXRsZTogJ0Nob29zZSBpdGVtIHdpdGggem9vbScsXHJcbiAgICBkZXByaWNhdGVkOiBmYWxzZSxcclxuICAgIGFyZ3VtZW50czogW1xyXG4gICAgICB7XHJcbiAgICAgICAgbmFtZTogJ29iamVjdDNkJyxcclxuICAgICAgICBsYWJlbDogJ09iamVjdDNkJyxcclxuICAgICAgICBjb250cm9sVHlwZTogJ2F1dG9jb21wbGV0ZU9iamVjdDNkJ1xyXG4gICAgICB9XHJcbiAgICBdXHJcbiAgfVxyXG5dXHJcbiJdfQ==