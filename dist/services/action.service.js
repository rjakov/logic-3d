var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { changeWindows, chooseItemWithZoom, loadAsset, loadNewSceneByObject, setMaterial, setMaterialColorsTest, showHideObjects, switchShowHideObjects } from '../actions/index';
import { actions } from '../configs/actions';
export const ActionService = {
    executAction(args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { actionId } = args;
            try {
                switch (actionId) {
                    case 'd0295c08-de97-4a5c-b7fd-f513e0a72604': {
                        // Load Asset
                        loadAsset(args);
                        break;
                    }
                    case 'ce0f56a6-f1f5-4789-bd7c-1a03b013e417': {
                        // Show hide objects
                        showHideObjects(args);
                        break;
                    }
                    case '33204c40-2060-43f0-9632-ecc3f902e238': {
                        // Switch show hide objects
                        switchShowHideObjects(args);
                        break;
                    }
                    case 'f2ee152b-59ba-46cf-a5c4-b1cefb8c1b53': {
                        // Set material
                        setMaterial(args);
                        break;
                    }
                    case 'djeo349j-p3k5-h1h8-3l6m-de9fg8u76l29': {
                        // Load new scene by object
                        yield loadNewSceneByObject(args);
                        break;
                    }
                    case '1s95d7f2-4158-4s0c-4k48-757d1ce65j4a': {
                        // Set material colors
                        yield setMaterialColorsTest(args);
                        break;
                    }
                    case 'h29l47f2-dh4k-ah65-49wj-l3o11cp3kj02': {
                        // Change windows material
                        yield changeWindows(args);
                        break;
                    }
                    case 'hd7e9kw-l3os-p94i-q9el-ldo98e7fo3k6': {
                        // Change windows material
                        yield chooseItemWithZoom(args);
                        break;
                    }
                }
            }
            catch (err) {
                const executedAction = actions.find(a => a.id === actionId);
                const title = executedAction ? executedAction.title : 'n/d';
                console.error(`Error: executAction with id ${actionId} and title ${title} error`, err);
            }
        });
    }
};
// export const ActionService = {
//   // scene, app, appData, logic, action, menuLogicObject, apiUrl
//   async executAction(scene, app, appData, logic, action, menuLogicObject?, apiUrl?: string) {
//     try {
//       switch (action) {
//         case '8e859f9e-75a8-4f26-8554-487b9b28ee7d': {
//           // Set car wheels
//           setCarWheels(scene);
//           break;
//         }
//         case 'f2ee152b-59ba-46cf-a5c4-b1cefb8c1b53': {
//           // Set material
//           setMaterial(scene, logic);
//           break;
//         }
//         case '5eab422e-448e-40f7-9bd2-917d8fb897b4': {
//           // Set objects menu material
//           await setObjectMenuMaterial(scene, app, appData, menuLogicObject, apiUrl);
//           break;
//         }
//         case '118cdd5d-13e7-472a-aeb4-43f74b72ee16': {
//           // Change test object
//           await changeTestObject(scene, app, appData, logic, menuLogicObject, apiUrl);
//           break;
//         }
//         case 'abc9be47-8a21-4a24-b2fc-569dfd8d5d26': {
//           // Change object
//           await changeCar(scene, app, logic, menuLogicObject, apiUrl);
//           break;
//         }
//         case 'cffb8e04-66d9-4e32-bb87-97c9526488d0': {
//           // Set AO_Body.jpg metal body texture
//           await setMetalBodyAoTexture(scene, app, apiUrl);
//           break;
//         }
//         case '64c79c30-111a-4b73-af82-e78d2d3bde48': {
//           // Change armrest (ues)
//           await changeArmrest(scene, app, logic, menuLogicObject, apiUrl);
//           break;
//         }
//         case '4889f97f-6fae-43d0-a695-ab02c7b66675': {
//           // Change ao texture
//           await setObjectsAoTexture(scene, app, appData, menuLogicObject, apiUrl);
//           break;
//         }
//         case 'ce0f56a6-f1f5-4789-bd7c-1a03b013e417': {
//           // Show hide objects
//           showHideObjects(scene, app, menuLogicObject);
//           break;
//         }
//         case '8a36e3ff-763d-4220-ad4d-700e10f3e972': {
//           // Toggle objects visibility
//           await toggleObjectsVisibility(scene, app, menuLogicObject, apiUrl);
//           break;
//         }
//         case '4745d7f2-4908-47ec-a648-7572cce652e8': {
//           // Set material colors
//           setMaterialColors(scene, app, appData, menuLogicObject, apiUrl);
//           break;
//         }
//         case '454590e8-5ae7-483d-9bfe-e0c33a660cd6': {
//           // Set material values
//           setMaterialValues(scene, app, appData, menuLogicObject, apiUrl);
//           break;
//         }
//         case '914b21e4-7c4a-465b-8ac1-70b7556382b2': {
//           // Set node material texture
//           setNodeMaterialTexture(scene, app, appData, menuLogicObject, apiUrl);
//           break;
//         }
//         case '9aad4232-e39c-48c7-876d-45d5293cb54d': {
//           toggleMaterial(scene, app, appData, menuLogicObject, apiUrl);
//           break;
//         }
//         case '94351714-b5d8-4651-bedf-e087873eda1a': {
//           hideObjects(scene, logic);
//           break;
//         }
//         case 'fa9e0841-9cda-4f5c-988b-86e9684892b1': {
//           toggleWindowAndMezzanine(scene);
//           break;
//         }
//         case '3530e770-908d-422c-8981-cd03204a1037': {
//           shiftWalls(scene);
//           break;
//         }
//         case 'ca0774f1-a6f9-4902-86ac-badbd8ee2442': {
//           // Switch objects
//           const result = await switchObjects(scene, app, menuLogicObject, apiUrl);
//           return result;
//         }
//       }
//     } catch (err) {
//       const executedAction = actions.find(a => a.id === action);
//       const title = executedAction ? executedAction.title : 'n/d';
//       console.error(`executAction with id ${action} and title ${title} error`, err);
//     }
//   }
// };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvYWN0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsT0FBTyxFQUNMLGFBQWEsRUFBRSxrQkFBa0IsRUFDakMsU0FBUyxFQUNULG9CQUFvQixFQUNwQixXQUFXLEVBQ1gscUJBQXFCLEVBQ3JCLGVBQWUsRUFDZixxQkFBcUIsRUFDdEIsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFHN0MsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHO0lBQ3JCLFlBQVksQ0FBRSxJQUE0Qjs7WUFDOUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJO2dCQUNGLFFBQVEsUUFBUSxFQUFFO29CQUNoQixLQUFLLHNDQUFzQyxDQUFDLENBQUM7d0JBQzNDLGFBQWE7d0JBQ2IsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNoQixNQUFNO3FCQUNQO29CQUNELEtBQUssc0NBQXNDLENBQUMsQ0FBQzt3QkFDM0Msb0JBQW9CO3dCQUNwQixlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3RCLE1BQU07cUJBQ1A7b0JBQ0QsS0FBSyxzQ0FBc0MsQ0FBQyxDQUFDO3dCQUMzQywyQkFBMkI7d0JBQzNCLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUM1QixNQUFNO3FCQUNQO29CQUNELEtBQUssc0NBQXNDLENBQUMsQ0FBQzt3QkFDM0MsZUFBZTt3QkFDZixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xCLE1BQU07cUJBQ1A7b0JBQ0QsS0FBSyxzQ0FBc0MsQ0FBQyxDQUFDO3dCQUMzQywyQkFBMkI7d0JBQzNCLE1BQU0sb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2pDLE1BQU07cUJBQ1A7b0JB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QUFRO0FBQ1IsTUFBTTtBQUNOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNoYW5nZVdpbmRvd3MsIGNob29zZUl0ZW1XaXRoWm9vbSxcclxuICBsb2FkQXNzZXQsXHJcbiAgbG9hZE5ld1NjZW5lQnlPYmplY3QsXHJcbiAgc2V0TWF0ZXJpYWwsXHJcbiAgc2V0TWF0ZXJpYWxDb2xvcnNUZXN0LFxyXG4gIHNob3dIaWRlT2JqZWN0cyxcclxuICBzd2l0Y2hTaG93SGlkZU9iamVjdHNcclxufSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcclxuaW1wb3J0IHsgYWN0aW9ucyB9IGZyb20gJy4uL2NvbmZpZ3MvYWN0aW9ucyc7XHJcbmltcG9ydCB7IEV4ZWN1dGVBY3Rpb25Bcmd1bWVudHMgfSBmcm9tICcuLi9tb2RlbC9leGVjdXRlLWFjdGlvbi1hcmd1bWVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGlvblNlcnZpY2UgPSB7XHJcbiAgYXN5bmMgZXhlY3V0QWN0aW9uIChhcmdzOiBFeGVjdXRlQWN0aW9uQXJndW1lbnRzKSB7XHJcbiAgICBjb25zdCB7IGFjdGlvbklkIH0gPSBhcmdzO1xyXG4gICAgdHJ5IHtcclxuICAgICAgc3dpdGNoIChhY3Rpb25JZCkge1xyXG4gICAgICAgIGNhc2UgJ2QwMjk1YzA4LWRlOTctNGE1Yy1iN2ZkLWY1MTNlMGE3MjYwNCc6IHtcclxuICAgICAgICAgIC8vIExvYWQgQXNzZXRcclxuICAgICAgICAgIGxvYWRBc3NldChhcmdzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICdjZTBmNTZhNi1mMWY1LTQ3ODktYmQ3Yy0xYTAzYjAxM2U0MTcnOiB7XHJcbiAgICAgICAgICAvLyBTaG93IGhpZGUgb2JqZWN0c1xyXG4gICAgICAgICAgc2hvd0hpZGVPYmplY3RzKGFyZ3MpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJzMzMjA0YzQwLTIwNjAtNDNmMC05NjMyLWVjYzNmOTAyZTIzOCc6IHtcclxuICAgICAgICAgIC8vIFN3aXRjaCBzaG93IGhpZGUgb2JqZWN0c1xyXG4gICAgICAgICAgc3dpdGNoU2hvd0hpZGVPYmplY3RzKGFyZ3MpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ2YyZWUxNTJiLTU5YmEtNDZjZi1hNWM0LWIxY2VmYjhjMWI1Myc6IHtcclxuICAgICAgICAgIC8vIFNldCBtYXRlcmlhbFxyXG4gICAgICAgICAgc2V0TWF0ZXJpYWwoYXJncyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnZGplbzM0OWotcDNrNS1oMWg4LTNsNm0tZGU5Zmc4dTc2bDI5Jzoge1xyXG4gICAgICAgICAgLy8gTG9hZCBuZXcgc2NlbmUgYnkgb2JqZWN0XHJcbiAgICAgICAgICBhd2FpdCBsb2FkTmV3U2NlbmVCeU9iamVjdChhcmdzKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlICcxczk1ZDdmMi00MTU4LTRzMGMtNGs0OC03NTdkMWNlNjVqNGEnOiB7XHJcbiAgICAgICAgICAvLyBTZXQgbWF0ZXJpYWwgY29sb3JzXHJcbiAgICAgICAgICBhd2FpdCBzZXRNYXRlcmlhbENvbG9yc1Rlc3QoYXJncyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnaDI5bDQ3ZjItZGg0ay1haDY1LTQ5d2otbDNvMTFjcDNrajAyJzoge1xyXG4gICAgICAgICAgLy8gQ2hhbmdlIHdpbmRvd3MgbWF0ZXJpYWxcclxuICAgICAgICAgIGF3YWl0IGNoYW5nZVdpbmRvd3MoYXJncyk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnaGQ3ZTlrdy1sM29zLXA5NGktcTllbC1sZG85OGU3Zm8zazYnOiB7XHJcbiAgICAgICAgICAvLyBDaGFuZ2Ugd2luZG93cyBtYXRlcmlhbFxyXG4gICAgICAgICAgYXdhaXQgY2hvb3NlSXRlbVdpdGhab29tKGFyZ3MpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgY29uc3QgZXhlY3V0ZWRBY3Rpb24gPSBhY3Rpb25zLmZpbmQoYSA9PiBhLmlkID09PSBhY3Rpb25JZCk7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gZXhlY3V0ZWRBY3Rpb24gPyBleGVjdXRlZEFjdGlvbi50aXRsZSA6ICduL2QnO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGBFcnJvcjogZXhlY3V0QWN0aW9uIHdpdGggaWQgJHthY3Rpb25JZH0gYW5kIHRpdGxlICR7dGl0bGV9IGVycm9yYCwgZXJyKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgQWN0aW9uU2VydmljZSA9IHtcclxuLy8gICAvLyBzY2VuZSwgYXBwLCBhcHBEYXRhLCBsb2dpYywgYWN0aW9uLCBtZW51TG9naWNPYmplY3QsIGFwaVVybFxyXG4vLyAgIGFzeW5jIGV4ZWN1dEFjdGlvbihzY2VuZSwgYXBwLCBhcHBEYXRhLCBsb2dpYywgYWN0aW9uLCBtZW51TG9naWNPYmplY3Q/LCBhcGlVcmw/OiBzdHJpbmcpIHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgIHN3aXRjaCAoYWN0aW9uKSB7XHJcbi8vICAgICAgICAgY2FzZSAnOGU4NTlmOWUtNzVhOC00ZjI2LTg1NTQtNDg3YjliMjhlZTdkJzoge1xyXG4vLyAgICAgICAgICAgLy8gU2V0IGNhciB3aGVlbHNcclxuLy8gICAgICAgICAgIHNldENhcldoZWVscyhzY2VuZSk7XHJcbi8vICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY2FzZSAnZjJlZTE1MmItNTliYS00NmNmLWE1YzQtYjFjZWZiOGMxYjUzJzoge1xyXG4vLyAgICAgICAgICAgLy8gU2V0IG1hdGVyaWFsXHJcbi8vICAgICAgICAgICBzZXRNYXRlcmlhbChzY2VuZSwgbG9naWMpO1xyXG4vLyAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGNhc2UgJzVlYWI0MjJlLTQ0OGUtNDBmNy05YmQyLTkxN2Q4ZmI4OTdiNCc6IHtcclxuLy8gICAgICAgICAgIC8vIFNldCBvYmplY3RzIG1lbnUgbWF0ZXJpYWxcclxuLy8gICAgICAgICAgIGF3YWl0IHNldE9iamVjdE1lbnVNYXRlcmlhbChzY2VuZSwgYXBwLCBhcHBEYXRhLCBtZW51TG9naWNPYmplY3QsIGFwaVVybCk7XHJcbi8vICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY2FzZSAnMTE4Y2RkNWQtMTNlNy00NzJhLWFlYjQtNDNmNzRiNzJlZTE2Jzoge1xyXG4vLyAgICAgICAgICAgLy8gQ2hhbmdlIHRlc3Qgb2JqZWN0XHJcbi8vICAgICAgICAgICBhd2FpdCBjaGFuZ2VUZXN0T2JqZWN0KHNjZW5lLCBhcHAsIGFwcERhdGEsIGxvZ2ljLCBtZW51TG9naWNPYmplY3QsIGFwaVVybCk7XHJcbi8vICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY2FzZSAnYWJjOWJlNDctOGEyMS00YTI0LWIyZmMtNTY5ZGZkOGQ1ZDI2Jzoge1xyXG4vLyAgICAgICAgICAgLy8gQ2hhbmdlIG9iamVjdFxyXG4vLyAgICAgICAgICAgYXdhaXQgY2hhbmdlQ2FyKHNjZW5lLCBhcHAsIGxvZ2ljLCBtZW51TG9naWNPYmplY3QsIGFwaVVybCk7XHJcbi8vICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY2FzZSAnY2ZmYjhlMDQtNjZkOS00ZTMyLWJiODctOTdjOTUyNjQ4OGQwJzoge1xyXG4vLyAgICAgICAgICAgLy8gU2V0IEFPX0JvZHkuanBnIG1ldGFsIGJvZHkgdGV4dHVyZVxyXG4vLyAgICAgICAgICAgYXdhaXQgc2V0TWV0YWxCb2R5QW9UZXh0dXJlKHNjZW5lLCBhcHAsIGFwaVVybCk7XHJcbi8vICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY2FzZSAnNjRjNzljMzAtMTExYS00YjczLWFmODItZTc4ZDJkM2JkZTQ4Jzoge1xyXG4vLyAgICAgICAgICAgLy8gQ2hhbmdlIGFybXJlc3QgKHVlcylcclxuLy8gICAgICAgICAgIGF3YWl0IGNoYW5nZUFybXJlc3Qoc2NlbmUsIGFwcCwgbG9naWMsIG1lbnVMb2dpY09iamVjdCwgYXBpVXJsKTtcclxuLy8gICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBjYXNlICc0ODg5Zjk3Zi02ZmFlLTQzZDAtYTY5NS1hYjAyYzdiNjY2NzUnOiB7XHJcbi8vICAgICAgICAgICAvLyBDaGFuZ2UgYW8gdGV4dHVyZVxyXG4vLyAgICAgICAgICAgYXdhaXQgc2V0T2JqZWN0c0FvVGV4dHVyZShzY2VuZSwgYXBwLCBhcHBEYXRhLCBtZW51TG9naWNPYmplY3QsIGFwaVVybCk7XHJcbi8vICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY2FzZSAnY2UwZjU2YTYtZjFmNS00Nzg5LWJkN2MtMWEwM2IwMTNlNDE3Jzoge1xyXG4vLyAgICAgICAgICAgLy8gU2hvdyBoaWRlIG9iamVjdHNcclxuLy8gICAgICAgICAgIHNob3dIaWRlT2JqZWN0cyhzY2VuZSwgYXBwLCBtZW51TG9naWNPYmplY3QpO1xyXG4vLyAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGNhc2UgJzhhMzZlM2ZmLTc2M2QtNDIyMC1hZDRkLTcwMGUxMGYzZTk3Mic6IHtcclxuLy8gICAgICAgICAgIC8vIFRvZ2dsZSBvYmplY3RzIHZpc2liaWxpdHlcclxuLy8gICAgICAgICAgIGF3YWl0IHRvZ2dsZU9iamVjdHNWaXNpYmlsaXR5KHNjZW5lLCBhcHAsIG1lbnVMb2dpY09iamVjdCwgYXBpVXJsKTtcclxuLy8gICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBjYXNlICc0NzQ1ZDdmMi00OTA4LTQ3ZWMtYTY0OC03NTcyY2NlNjUyZTgnOiB7XHJcbi8vICAgICAgICAgICAvLyBTZXQgbWF0ZXJpYWwgY29sb3JzXHJcbi8vICAgICAgICAgICBzZXRNYXRlcmlhbENvbG9ycyhzY2VuZSwgYXBwLCBhcHBEYXRhLCBtZW51TG9naWNPYmplY3QsIGFwaVVybCk7XHJcbi8vICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY2FzZSAnNDU0NTkwZTgtNWFlNy00ODNkLTliZmUtZTBjMzNhNjYwY2Q2Jzoge1xyXG4vLyAgICAgICAgICAgLy8gU2V0IG1hdGVyaWFsIHZhbHVlc1xyXG4vLyAgICAgICAgICAgc2V0TWF0ZXJpYWxWYWx1ZXMoc2NlbmUsIGFwcCwgYXBwRGF0YSwgbWVudUxvZ2ljT2JqZWN0LCBhcGlVcmwpO1xyXG4vLyAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGNhc2UgJzkxNGIyMWU0LTdjNGEtNDY1Yi04YWMxLTcwYjc1NTYzODJiMic6IHtcclxuLy8gICAgICAgICAgIC8vIFNldCBub2RlIG1hdGVyaWFsIHRleHR1cmVcclxuLy8gICAgICAgICAgIHNldE5vZGVNYXRlcmlhbFRleHR1cmUoc2NlbmUsIGFwcCwgYXBwRGF0YSwgbWVudUxvZ2ljT2JqZWN0LCBhcGlVcmwpO1xyXG4vLyAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGNhc2UgJzlhYWQ0MjMyLWUzOWMtNDhjNy04NzZkLTQ1ZDUyOTNjYjU0ZCc6IHtcclxuLy8gICAgICAgICAgIHRvZ2dsZU1hdGVyaWFsKHNjZW5lLCBhcHAsIGFwcERhdGEsIG1lbnVMb2dpY09iamVjdCwgYXBpVXJsKTtcclxuLy8gICAgICAgICAgIGJyZWFrO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBjYXNlICc5NDM1MTcxNC1iNWQ4LTQ2NTEtYmVkZi1lMDg3ODczZWRhMWEnOiB7XHJcbi8vICAgICAgICAgICBoaWRlT2JqZWN0cyhzY2VuZSwgbG9naWMpO1xyXG4vLyAgICAgICAgICAgYnJlYWs7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGNhc2UgJ2ZhOWUwODQxLTljZGEtNGY1Yy05ODhiLTg2ZTk2ODQ4OTJiMSc6IHtcclxuLy8gICAgICAgICAgIHRvZ2dsZVdpbmRvd0FuZE1lenphbmluZShzY2VuZSk7XHJcbi8vICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY2FzZSAnMzUzMGU3NzAtOTA4ZC00MjJjLTg5ODEtY2QwMzIwNGExMDM3Jzoge1xyXG4vLyAgICAgICAgICAgc2hpZnRXYWxscyhzY2VuZSk7XHJcbi8vICAgICAgICAgICBicmVhaztcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgY2FzZSAnY2EwNzc0ZjEtYTZmOS00OTAyLTg2YWMtYmFkYmQ4ZWUyNDQyJzoge1xyXG4vLyAgICAgICAgICAgLy8gU3dpdGNoIG9iamVjdHNcclxuLy8gICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHN3aXRjaE9iamVjdHMoc2NlbmUsIGFwcCwgbWVudUxvZ2ljT2JqZWN0LCBhcGlVcmwpO1xyXG4vLyAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgIH1cclxuLy8gICAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgICBjb25zdCBleGVjdXRlZEFjdGlvbiA9IGFjdGlvbnMuZmluZChhID0+IGEuaWQgPT09IGFjdGlvbik7XHJcbi8vICAgICAgIGNvbnN0IHRpdGxlID0gZXhlY3V0ZWRBY3Rpb24gPyBleGVjdXRlZEFjdGlvbi50aXRsZSA6ICduL2QnO1xyXG4vLyAgICAgICBjb25zb2xlLmVycm9yKGBleGVjdXRBY3Rpb24gd2l0aCBpZCAke2FjdGlvbn0gYW5kIHRpdGxlICR7dGl0bGV9IGVycm9yYCwgZXJyKTtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vIH07XHJcbiJdfQ==