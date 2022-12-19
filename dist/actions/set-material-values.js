var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UtilsService } from '../services/utils.service';
import * as _ from 'lodash';
const getMaterialValues = (material) => {
    if (material.isMeshNodeMaterial) {
        return Object.keys(material.nodeValueMap);
    }
    else if (material.isMeshStandardMaterial) {
        return ['metalness', 'roughness', 'bumpScale', 'emissiveIntensity', 'envMapIntensity'];
    }
    else {
        return [];
    }
};
const setValues = (app, material, valueProperties) => {
    const values = getMaterialValues(material);
    valueProperties.forEach(valueProperty => {
        const valueName = Object.keys(valueProperty)[0];
        if (values.indexOf(valueName) < 0) {
            return;
        }
        if (material.isMeshNodeMaterial) {
            const valIdx = material.nodeValueMap[valueName];
            material.nodeValue[valIdx] = isNaN(Number(Object.values(valueProperty)[0])) ? Object.values(valueProperty)[0] : Number(Object.values(valueProperty)[0]);
        }
        else {
            material[valueName] = isNaN(Number(Object.values(valueProperty)[0])) ? Object.values(valueProperty)[0] : Number(Object.values(valueProperty)[0]);
        }
    });
    material.needsUpdate = true;
    if (material === app.worldMaterial) {
        app.updateEnvironment(material);
    }
};
export const setMaterialValues = (scene, app, appData, menuLogicObject, apiUrl) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(menuLogicObject.data && menuLogicObject.data.properties && menuLogicObject.data.properties.length))
            return;
        const valueProperties = menuLogicObject.data.properties.filter(p => {
            return !/.*color.*/gi.test(Object.keys(p)[0]) && !/.*nodeTextures.*/gi.test(Object.keys(p)[0]);
        });
        if (!valueProperties.length)
            return;
        const material = yield UtilsService.getMaterialByEntity(scene, app, menuLogicObject, apiUrl);
        if (!material) {
            // error
            console.warn(`Object with a scene name ${menuLogicObject.sceneName} cannot be found in the scene and cannot be loaded`);
            return;
        }
        const object3ds = UtilsService.findObject3dsByMaterialEntity(appData, menuLogicObject);
        if (!object3ds.length) {
            console.warn(`setMaterialValues material ${menuLogicObject.sceneName} no object3ds found`);
            return;
        }
        object3ds.forEach(object3d => {
            // in case we have several object names, splitted by ','
            const object3dSceneNames = object3d.sceneName.split(',').map(n => n.trim());
            object3dSceneNames.forEach(sn => {
                object3d = UtilsService.getObjectByName(scene, sn);
                if (object3d) {
                    if (object3d.material && object3d.material.name === material.name) {
                        const material = object3d.material.clone();
                        material.nodeValue = _.cloneDeep(object3d.material.nodeValue);
                        setValues(app, material, valueProperties);
                        object3d.material = material;
                    }
                    else {
                        setValues(app, material, valueProperties);
                        object3d.material = material;
                    }
                }
                else {
                    {
                        console.warn(`setMaterialValues - object3d ${sn} not found`);
                    }
                }
            });
        });
    }
    catch (err) {
        console.error(`setMaterialValues error`, err);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LW1hdGVyaWFsLXZhbHVlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NldC1tYXRlcmlhbC12YWx1ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBRTVCLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxRQUFhLEVBQVksRUFBRTtJQUNwRCxJQUFJLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBQzNDO1NBQU0sSUFBSSxRQUFRLENBQUMsc0JBQXNCLEVBQUU7UUFDMUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixDQUFDLENBQUM7S0FDeEY7U0FBTTtRQUNMLE9BQU8sRUFBRSxDQUFDO0tBQ1g7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLFNBQVMsR0FBRyxDQUFDLEdBQVEsRUFBRSxRQUFhLEVBQUUsZUFBc0IsRUFBUSxFQUFFO0lBQzFFLE1BQU0sTUFBTSxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTNDLGVBQWUsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7UUFDdEMsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pDLE9BQU87U0FDUjtRQUVELElBQUksUUFBUSxDQUFDLGtCQUFrQixFQUFFO1lBQy9CLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENB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LENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUM5QixRQUFRLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ25ELElBQUksUUFBUSxFQUFFO29CQUNaLElBQUksUUFBUSxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFO3dCQUNqRSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUMzQyxRQUFRLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQzt3QkFDOUQsU0FBUyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7d0JBQzFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO3FCQUM5Qjt5QkFBTTt3QkFDTCxTQUFTLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQzt3QkFDMUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7cUJBQzlCO2lCQUNGO3FCQUFNO29CQUNMO3dCQUNFLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLEVBQUUsWUFBWSxDQUFDLENBQUM7cUJBQzlEO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztLQUNKO0lBQUMsT0FBTyxHQUFHLEVBQUU7UUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQy9DO0FBQ0gsQ0FBQyxDQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5cclxuY29uc3QgZ2V0TWF0ZXJpYWxWYWx1ZXMgPSAobWF0ZXJpYWw6IGFueSk6IHN0cmluZ1tdID0+IHtcclxuICBpZiAobWF0ZXJpYWwuaXNNZXNoTm9kZU1hdGVyaWFsKSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LmtleXMobWF0ZXJpYWwubm9kZVZhbHVlTWFwKTtcclxuICB9IGVsc2UgaWYgKG1hdGVyaWFsLmlzTWVzaFN0YW5kYXJkTWF0ZXJpYWwpIHtcclxuICAgIHJldHVybiBbJ21ldGFsbmVzcycsICdyb3VnaG5lc3MnLCAnYnVtcFNjYWxlJywgJ2VtaXNzaXZlSW50ZW5zaXR5JywgJ2Vudk1hcEludGVuc2l0eSddO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgc2V0VmFsdWVzID0gKGFwcDogYW55LCBtYXRlcmlhbDogYW55LCB2YWx1ZVByb3BlcnRpZXM6IGFueVtdKTogdm9pZCA9PiB7XHJcbiAgY29uc3QgdmFsdWVzID0gZ2V0TWF0ZXJpYWxWYWx1ZXMobWF0ZXJpYWwpO1xyXG5cclxuICB2YWx1ZVByb3BlcnRpZXMuZm9yRWFjaCh2YWx1ZVByb3BlcnR5ID0+IHtcclxuICAgIGNvbnN0IHZhbHVlTmFtZSA9IE9iamVjdC5rZXlzKHZhbHVlUHJvcGVydHkpWzBdO1xyXG5cclxuICAgIGlmICh2YWx1ZXMuaW5kZXhPZih2YWx1ZU5hbWUpIDwgMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1hdGVyaWFsLmlzTWVzaE5vZGVNYXRlcmlhbCkge1xyXG4gICAgICBjb25zdCB2YWxJZHggPSBtYXRlcmlhbC5ub2RlVmFsdWVNYXBbdmFsdWVOYW1lXTtcclxuICAgICAgbWF0ZXJpYWwubm9kZVZhbHVlW3ZhbElkeF0gPSBpc05hTihOdW1iZXIoT2JqZWN0LnZhbHVlcyh2YWx1ZVByb3BlcnR5KVswXSkpID8gT2JqZWN0LnZhbHVlcyh2YWx1ZVByb3BlcnR5KVswXSA6IE51bWJlcihPYmplY3QudmFsdWVzKHZhbHVlUHJvcGVydHkpWzBdKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1hdGVyaWFsW3ZhbHVlTmFtZV0gPSBpc05hTihOdW1iZXIoT2JqZWN0LnZhbHVlcyh2YWx1ZVByb3BlcnR5KVswXSkpID8gT2JqZWN0LnZhbHVlcyh2YWx1ZVByb3BlcnR5KVswXSA6IE51bWJlcihPYmplY3QudmFsdWVzKHZhbHVlUHJvcGVydHkpWzBdKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICBpZiAobWF0ZXJpYWwgPT09IGFwcC53b3JsZE1hdGVyaWFsKSB7XHJcbiAgICBhcHAudXBkYXRlRW52aXJvbm1lbnQobWF0ZXJpYWwpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRNYXRlcmlhbFZhbHVlcyA9IGFzeW5jIChzY2VuZSwgYXBwLCBhcHBEYXRhLCBtZW51TG9naWNPYmplY3QsIGFwaVVybCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBpZiAoIShtZW51TG9naWNPYmplY3QuZGF0YSAmJiBtZW51TG9naWNPYmplY3QuZGF0YS5wcm9wZXJ0aWVzICYmIG1lbnVMb2dpY09iamVjdC5kYXRhLnByb3BlcnRpZXMubGVuZ3RoKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHZhbHVlUHJvcGVydGllcyA9IG1lbnVMb2dpY09iamVjdC5kYXRhLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4ge1xyXG4gICAgICByZXR1cm4gIS8uKmNvbG9yLiovZ2kudGVzdChPYmplY3Qua2V5cyhwKVswXSkgJiYgIS8uKm5vZGVUZXh0dXJlcy4qL2dpLnRlc3QoT2JqZWN0LmtleXMocClbMF0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCF2YWx1ZVByb3BlcnRpZXMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbWF0ZXJpYWw6IGFueSA9IGF3YWl0IFV0aWxzU2VydmljZS5nZXRNYXRlcmlhbEJ5RW50aXR5KHNjZW5lLCBhcHAsIG1lbnVMb2dpY09iamVjdCwgYXBpVXJsKTtcclxuICAgIGlmICghbWF0ZXJpYWwpIHtcclxuICAgICAgLy8gZXJyb3JcclxuICAgICAgY29uc29sZS53YXJuKGBPYmplY3Qgd2l0aCBhIHNjZW5lIG5hbWUgJHttZW51TG9naWNPYmplY3Quc2NlbmVOYW1lfSBjYW5ub3QgYmUgZm91bmQgaW4gdGhlIHNjZW5lIGFuZCBjYW5ub3QgYmUgbG9hZGVkYCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvYmplY3QzZHMgPSBVdGlsc1NlcnZpY2UuZmluZE9iamVjdDNkc0J5TWF0ZXJpYWxFbnRpdHkoYXBwRGF0YSwgbWVudUxvZ2ljT2JqZWN0KTtcclxuXHJcbiAgICBpZiAoIW9iamVjdDNkcy5sZW5ndGgpIHtcclxuICAgICAgY29uc29sZS53YXJuKGBzZXRNYXRlcmlhbFZhbHVlcyBtYXRlcmlhbCAke21lbnVMb2dpY09iamVjdC5zY2VuZU5hbWV9IG5vIG9iamVjdDNkcyBmb3VuZGApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgb2JqZWN0M2RzLmZvckVhY2gob2JqZWN0M2QgPT4ge1xyXG4gICAgICAvLyBpbiBjYXNlIHdlIGhhdmUgc2V2ZXJhbCBvYmplY3QgbmFtZXMsIHNwbGl0dGVkIGJ5ICcsJ1xyXG4gICAgICBjb25zdCBvYmplY3QzZFNjZW5lTmFtZXMgPSBvYmplY3QzZC5zY2VuZU5hbWUuc3BsaXQoJywnKS5tYXAobiA9PiBuLnRyaW0oKSk7XHJcblxyXG4gICAgICBvYmplY3QzZFNjZW5lTmFtZXMuZm9yRWFjaChzbiA9PiB7XHJcbiAgICAgICAgb2JqZWN0M2QgPSBVdGlsc1NlcnZpY2UuZ2V0T2JqZWN0QnlOYW1lKHNjZW5lLCBzbik7XHJcbiAgICAgICAgaWYgKG9iamVjdDNkKSB7XHJcbiAgICAgICAgICBpZiAob2JqZWN0M2QubWF0ZXJpYWwgJiYgb2JqZWN0M2QubWF0ZXJpYWwubmFtZSA9PT0gbWF0ZXJpYWwubmFtZSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG9iamVjdDNkLm1hdGVyaWFsLmNsb25lKCk7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsLm5vZGVWYWx1ZSA9IF8uY2xvbmVEZWVwKG9iamVjdDNkLm1hdGVyaWFsLm5vZGVWYWx1ZSk7XHJcbiAgICAgICAgICAgIHNldFZhbHVlcyhhcHAsIG1hdGVyaWFsLCB2YWx1ZVByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICBvYmplY3QzZC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VmFsdWVzKGFwcCwgbWF0ZXJpYWwsIHZhbHVlUHJvcGVydGllcyk7XHJcbiAgICAgICAgICAgIG9iamVjdDNkLm1hdGVyaWFsID0gbWF0ZXJpYWw7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBzZXRNYXRlcmlhbFZhbHVlcyAtIG9iamVjdDNkICR7c259IG5vdCBmb3VuZGApO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHNldE1hdGVyaWFsVmFsdWVzIGVycm9yYCwgZXJyKTtcclxuICB9XHJcbn07XHJcbiJdfQ==