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
const emptyTextureName = 'empty.jpg';
const materialsEmptyTexturesMap = new Map();
const materialsEmptyTextureKeysMap = new Map();
const getTextureKey = (material, textureName) => Object.keys(material.nodeTextures).find(key => material.nodeTextures[key].name === textureName);
const getEmptyTextureKey = (material, textureName) => {
    const key = getTextureKey(material, textureName);
    if (key && !materialsEmptyTextureKeysMap.get(material.name)) {
        materialsEmptyTextureKeysMap.set(material.name, key);
    }
    return materialsEmptyTextureKeysMap.get(material.name);
};
const setTextures = (app, material, textureProperties) => {
    textureProperties.forEach(valueProperty => {
        const textureName = Object.values(valueProperty)[0];
        const textureKey = getTextureKey(material, textureName);
        const emptyTextureKey = getEmptyTextureKey(material, emptyTextureName);
        if (!textureKey) {
            console.warn(`setNodeMaterialTexture textureKey for texture ${textureName} undefined`);
            return;
        }
        if (!emptyTextureKey) {
            console.warn(`setNodeMaterialTexture emptyTextureKey for texture ${emptyTextureName} undefined`);
            return;
        }
        if (material.nodeTextures[emptyTextureKey] && material.name && !materialsEmptyTexturesMap.get(material.name)) {
            materialsEmptyTexturesMap.set(material.name, material.nodeTextures[emptyTextureKey]);
        }
        if (material.isMeshNodeMaterial) {
            material.nodeTextures[emptyTextureKey] = material.nodeTextures[textureKey];
            UtilsService.updateWorldMaterialConcerningTexture(app, material.nodeTextures[emptyTextureKey]);
        }
        else {
            console.warn(`setNodeMaterialTexture trying to change nodeTexture on not node material ${material.name}`);
        }
    });
    material.needsUpdate = true;
    if (material === app.worldMaterial) {
        app.updateEnvironment(material);
    }
};
const setDefaultTexture = (app, material) => {
    if (material.isMeshNodeMaterial) {
        if (material.name && materialsEmptyTexturesMap.get(material.name)) {
            const emptyTextureKey = getTextureKey(material, emptyTextureName);
            if (!emptyTextureKey) {
                console.warn(`setNodeMaterialTexture emptyTextureKey for texture ${emptyTextureName} undefined`);
                return;
            }
            material.nodeTextures[emptyTextureKey] = materialsEmptyTexturesMap.get(material.name);
            UtilsService.updateWorldMaterialConcerningTexture(app, material.nodeTextures[emptyTextureKey]);
        }
        else {
            console.warn(`setNodeMaterialTexture cannot find default texture for material ${material.name}`);
        }
    }
    else {
        console.warn(`setNodeMaterialTexture tring to change nodeTexture on not node material ${material.name}`);
    }
};
const setTextureNodeValues = (material, textureNodeValueMapProperties) => {
    try {
        if (textureNodeValueMapProperties.length) {
            textureNodeValueMapProperties.forEach(property => {
                const nodeValueMap = JSON.parse(Object.keys(property)[0]);
                let nodeValue = Object.values(property)[0];
                nodeValue = !Number.isNaN(Number(nodeValue)) ? Number(nodeValue) : nodeValue;
                const nodeValueIdx = Object.values(nodeValueMap['nodeValueMap'])[0];
                material.nodeValue[nodeValueIdx] = nodeValue;
            });
        }
    }
    catch (err) {
        console.warn(`setTextureNodeValues Error ${err.message}`);
    }
};
export const setNodeMaterialTexture = (scene, app, appData, menuLogicObject, apiUrl) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(menuLogicObject.data && menuLogicObject.data.properties && menuLogicObject.data.properties.length))
        return;
    const textureProperties = menuLogicObject.data.properties.filter(p => {
        return /.*nodeTextures.*/gi.test(Object.keys(p)[0]);
    });
    const textureNodeValueMapProperties = menuLogicObject.data.properties.filter(p => {
        return /.*nodeValueMap.*/gi.test(Object.keys(p)[0]);
    });
    const material = yield UtilsService.getMaterialByEntity(scene, app, menuLogicObject, apiUrl);
    if (!material) {
        // error
        console.warn(`Object with a scene name ${menuLogicObject.sceneName} cannot be found in the scene and cannot be loaded`);
        return;
    }
    const object3ds = UtilsService.findObject3dsByMaterialEntity(appData, menuLogicObject);
    if (!object3ds.length) {
        console.warn(`setMaterialTexture material ${menuLogicObject.sceneName} no object3ds found`);
        return;
    }
    object3ds.forEach(object3d => {
        // in case we have several object names, splitted by ','
        const object3dSceneNames = object3d.sceneName.split(',').map(n => n.trim());
        object3dSceneNames.forEach(sn => {
            object3d = UtilsService.getObjectByName(scene, sn);
            if (object3d) {
                if (!textureProperties.length) {
                    setDefaultTexture(app, material);
                    return;
                }
                else {
                    if (object3d.material && object3d.material.name === material.name) {
                        setTextureNodeValues(object3d.material, textureNodeValueMapProperties);
                        setTextures(app, object3d.material, textureProperties);
                    }
                    else {
                        setTextureNodeValues(material, textureNodeValueMapProperties);
                        setTextures(app, material, textureProperties);
                        object3d.material = material;
                    }
                }
            }
            else {
                {
                    console.warn(`setMaterialTexture - object3d ${sn} not found`);
                }
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LW5vZGUtbWF0ZXJpYWwtdGV4dHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NldC1ub2RlLW1hdGVyaWFsLXRleHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE1BQU0sZ0JBQWdCLEdBQUcsV0FBVyxDQUFDO0FBQ3JDLE1BQU0seUJBQXlCLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztBQUM1QyxNQUFNLDRCQUE0QixHQUFHLElBQUksR0FBRyxFQUFFLENBQUM7QUFFL0MsTUFBTSxhQUFhLEdBQUcsQ0FBQyxRQUFRLEVBQUUsV0FBVyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksS0FBSyxXQUFXLENBQUMsQ0FBQztBQUVqSixNQUFNLGtCQUFrQixHQUFHLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRSxFQUFFO0lBQ25ELE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDakQsSUFBSSxHQUFHLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQzNELDRCQUE0QixDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ3REO0lBQ0QsT0FBTyw0QkFBNEIsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pELENBQUMsQ0FBQztBQUVGLE1BQU0sV0FBVyxHQUFHLENBQUMsR0FBUSxFQUFFLFFBQWEsRUFBRSxpQkFBd0IsRUFBUSxFQUFFO0lB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TyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQzlCLFFBQVEsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNuRCxJQUFJLFFBQVEsRUFBRTtnQkFDWixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFO29CQUM3QixpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7b0JBQ2pDLE9BQU87aUJBQ1I7cUJBQU07b0JBQ0wsSUFBSSxRQUFRLENBQUMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUU7d0JBQ2pFLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsNkJBQTZCLENBQUMsQ0FBQzt3QkFDdkUsV0FBVyxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDLENBQUM7cUJBQ3hEO3lCQUFNO3dCQUNMLG9CQUFvQixDQUFDLFFBQVEsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO3dCQUM5RCxXQUFXLENBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO3dCQUM5QyxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztxQkFDOUI7aUJBQ0Y7YUFDRjtpQkFBTTtnQkFDTDtvQkFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxFQUFFLFlBQVksQ0FBQyxDQUFDO2lCQUMvRDthQUNGO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbHMuc2VydmljZSc7XHJcblxyXG5jb25zdCBlbXB0eVRleHR1cmVOYW1lID0gJ2VtcHR5LmpwZyc7XHJcbmNvbnN0IG1hdGVyaWFsc0VtcHR5VGV4dHVyZXNNYXAgPSBuZXcgTWFwKCk7XHJcbmNvbnN0IG1hdGVyaWFsc0VtcHR5VGV4dHVyZUtleXNNYXAgPSBuZXcgTWFwKCk7XHJcblxyXG5jb25zdCBnZXRUZXh0dXJlS2V5ID0gKG1hdGVyaWFsLCB0ZXh0dXJlTmFtZSkgPT4gT2JqZWN0LmtleXMobWF0ZXJpYWwubm9kZVRleHR1cmVzKS5maW5kKGtleSA9PiBtYXRlcmlhbC5ub2RlVGV4dHVyZXNba2V5XS5uYW1lID09PSB0ZXh0dXJlTmFtZSk7XHJcblxyXG5jb25zdCBnZXRFbXB0eVRleHR1cmVLZXkgPSAobWF0ZXJpYWwsIHRleHR1cmVOYW1lKSA9PiB7XHJcbiAgY29uc3Qga2V5ID0gZ2V0VGV4dHVyZUtleShtYXRlcmlhbCwgdGV4dHVyZU5hbWUpO1xyXG4gIGlmIChrZXkgJiYgIW1hdGVyaWFsc0VtcHR5VGV4dHVyZUtleXNNYXAuZ2V0KG1hdGVyaWFsLm5hbWUpKSB7XHJcbiAgICBtYXRlcmlhbHNFbXB0eVRleHR1cmVLZXlzTWFwLnNldChtYXRlcmlhbC5uYW1lLCBrZXkpO1xyXG4gIH1cclxuICByZXR1cm4gbWF0ZXJpYWxzRW1wdHlUZXh0dXJlS2V5c01hcC5nZXQobWF0ZXJpYWwubmFtZSk7XHJcbn07XHJcblxyXG5jb25zdCBzZXRUZXh0dXJlcyA9IChhcHA6IGFueSwgbWF0ZXJpYWw6IGFueSwgdGV4dHVyZVByb3BlcnRpZXM6IGFueVtdKTogdm9pZCA9PiB7XHJcbiAgdGV4dHVyZVByb3BlcnRpZXMuZm9yRWFjaCh2YWx1ZVByb3BlcnR5ID0+IHtcclxuICAgIGNvbnN0IHRleHR1cmVOYW1lID0gT2JqZWN0LnZhbHVlcyh2YWx1ZVByb3BlcnR5KVswXTtcclxuICAgIGNvbnN0IHRleHR1cmVLZXkgPSBnZXRUZXh0dXJlS2V5KG1hdGVyaWFsLCB0ZXh0dXJlTmFtZSk7XHJcbiAgICBjb25zdCBlbXB0eVRleHR1cmVLZXkgPSBnZXRFbXB0eVRleHR1cmVLZXkobWF0ZXJpYWwsIGVtcHR5VGV4dHVyZU5hbWUpO1xyXG5cclxuICAgIGlmICghdGV4dHVyZUtleSkge1xyXG4gICAgICBjb25zb2xlLndhcm4oYHNldE5vZGVNYXRlcmlhbFRleHR1cmUgdGV4dHVyZUtleSBmb3IgdGV4dHVyZSAke3RleHR1cmVOYW1lfSB1bmRlZmluZWRgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZW1wdHlUZXh0dXJlS2V5KSB7XHJcbiAgICAgIGNvbnNvbGUud2Fybihgc2V0Tm9kZU1hdGVyaWFsVGV4dHVyZSBlbXB0eVRleHR1cmVLZXkgZm9yIHRleHR1cmUgJHtlbXB0eVRleHR1cmVOYW1lfSB1bmRlZmluZWRgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChtYXRlcmlhbC5ub2RlVGV4dHVyZXNbZW1wdHlUZXh0dXJlS2V5XSAmJiBtYXRlcmlhbC5uYW1lICYmICFtYXRlcmlhbHNFbXB0eVRleHR1cmVzTWFwLmdldChtYXRlcmlhbC5uYW1lKSkge1xyXG4gICAgICBtYXRlcmlhbHNFbXB0eVRleHR1cmVzTWFwLnNldChtYXRlcmlhbC5uYW1lLCBtYXRlcmlhbC5ub2RlVGV4dHVyZXNbZW1wdHlUZXh0dXJlS2V5XSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG1hdGVyaWFsLmlzTWVzaE5vZGVNYXRlcmlhbCkge1xyXG4gICAgICBtYXRlcmlhbC5ub2RlVGV4dHVyZXNbZW1wdHlUZXh0dXJlS2V5XSA9IG1hdGVyaWFsLm5vZGVUZXh0dXJlc1t0ZXh0dXJlS2V5XTtcclxuICAgICAgVXRpbHNTZXJ2aWNlLnVwZGF0ZVdvcmxkTWF0ZXJpYWxDb25jZXJuaW5nVGV4dHVyZShhcHAsIG1hdGVyaWFsLm5vZGVUZXh0dXJlc1tlbXB0eVRleHR1cmVLZXldKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUud2Fybihgc2V0Tm9kZU1hdGVyaWFsVGV4dHVyZSB0cnlpbmcgdG8gY2hhbmdlIG5vZGVUZXh0dXJlIG9uIG5vdCBub2RlIG1hdGVyaWFsICR7bWF0ZXJpYWwubmFtZX1gKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICBpZiAobWF0ZXJpYWwgPT09IGFwcC53b3JsZE1hdGVyaWFsKSB7XHJcbiAgICBhcHAudXBkYXRlRW52aXJvbm1lbnQobWF0ZXJpYWwpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHNldERlZmF1bHRUZXh0dXJlID0gKGFwcDogYW55LCBtYXRlcmlhbDogYW55KSA9PiB7XHJcbiAgaWYgKG1hdGVyaWFsLmlzTWVzaE5vZGVNYXRlcmlhbCkge1xyXG4gICAgaWYgKG1hdGVyaWFsLm5hbWUgJiYgbWF0ZXJpYWxzRW1wdHlUZXh0dXJlc01hcC5nZXQobWF0ZXJpYWwubmFtZSkpIHtcclxuICAgICAgY29uc3QgZW1wdHlUZXh0dXJlS2V5ID0gZ2V0VGV4dHVyZUtleShtYXRlcmlhbCwgZW1wdHlUZXh0dXJlTmFtZSk7XHJcbiAgICAgIGlmICghZW1wdHlUZXh0dXJlS2V5KSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGBzZXROb2RlTWF0ZXJpYWxUZXh0dXJlIGVtcHR5VGV4dHVyZUtleSBmb3IgdGV4dHVyZSAke2VtcHR5VGV4dHVyZU5hbWV9IHVuZGVmaW5lZGApO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBtYXRlcmlhbC5ub2RlVGV4dHVyZXNbZW1wdHlUZXh0dXJlS2V5XSA9IG1hdGVyaWFsc0VtcHR5VGV4dHVyZXNNYXAuZ2V0KG1hdGVyaWFsLm5hbWUpO1xyXG4gICAgICBVdGlsc1NlcnZpY2UudXBkYXRlV29ybGRNYXRlcmlhbENvbmNlcm5pbmdUZXh0dXJlKGFwcCwgbWF0ZXJpYWwubm9kZVRleHR1cmVzW2VtcHR5VGV4dHVyZUtleV0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS53YXJuKGBzZXROb2RlTWF0ZXJpYWxUZXh0dXJlIGNhbm5vdCBmaW5kIGRlZmF1bHQgdGV4dHVyZSBmb3IgbWF0ZXJpYWwgJHttYXRlcmlhbC5uYW1lfWApO1xyXG4gICAgfVxyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLndhcm4oYHNldE5vZGVNYXRlcmlhbFRleHR1cmUgdHJpbmcgdG8gY2hhbmdlIG5vZGVUZXh0dXJlIG9uIG5vdCBub2RlIG1hdGVyaWFsICR7bWF0ZXJpYWwubmFtZX1gKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBzZXRUZXh0dXJlTm9kZVZhbHVlcyA9IChtYXRlcmlhbDogYW55LCB0ZXh0dXJlTm9kZVZhbHVlTWFwUHJvcGVydGllczogYW55KSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmICh0ZXh0dXJlTm9kZVZhbHVlTWFwUHJvcGVydGllcy5sZW5ndGgpIHtcclxuICAgICAgdGV4dHVyZU5vZGVWYWx1ZU1hcFByb3BlcnRpZXMuZm9yRWFjaChwcm9wZXJ0eSA9PiB7XHJcbiAgICAgICAgY29uc3Qgbm9kZVZhbHVlTWFwID0gSlNPTi5wYXJzZShPYmplY3Qua2V5cyhwcm9wZXJ0eSlbMF0pO1xyXG4gICAgICAgIGxldCBub2RlVmFsdWUgPSBPYmplY3QudmFsdWVzKHByb3BlcnR5KVswXTtcclxuICAgICAgICBub2RlVmFsdWUgPSAhTnVtYmVyLmlzTmFOKE51bWJlcihub2RlVmFsdWUpKSA/IE51bWJlcihub2RlVmFsdWUpIDogbm9kZVZhbHVlO1xyXG4gICAgICAgIGNvbnN0IG5vZGVWYWx1ZUlkeCA9IDxudW1iZXI+T2JqZWN0LnZhbHVlcyhub2RlVmFsdWVNYXBbJ25vZGVWYWx1ZU1hcCddKVswXTtcclxuICAgICAgICBtYXRlcmlhbC5ub2RlVmFsdWVbbm9kZVZhbHVlSWR4XSA9IG5vZGVWYWx1ZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLndhcm4oYHNldFRleHR1cmVOb2RlVmFsdWVzIEVycm9yICR7ZXJyLm1lc3NhZ2V9YCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldE5vZGVNYXRlcmlhbFRleHR1cmUgPSBhc3luYyAoc2NlbmUsIGFwcCwgYXBwRGF0YSwgbWVudUxvZ2ljT2JqZWN0LCBhcGlVcmwpID0+IHtcclxuICBpZiAoIShtZW51TG9naWNPYmplY3QuZGF0YSAmJiBtZW51TG9naWNPYmplY3QuZGF0YS5wcm9wZXJ0aWVzICYmIG1lbnVMb2dpY09iamVjdC5kYXRhLnByb3BlcnRpZXMubGVuZ3RoKSkgcmV0dXJuO1xyXG5cclxuICBjb25zdCB0ZXh0dXJlUHJvcGVydGllcyA9IG1lbnVMb2dpY09iamVjdC5kYXRhLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4ge1xyXG4gICAgcmV0dXJuIC8uKm5vZGVUZXh0dXJlcy4qL2dpLnRlc3QoT2JqZWN0LmtleXMocClbMF0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCB0ZXh0dXJlTm9kZVZhbHVlTWFwUHJvcGVydGllcyA9IG1lbnVMb2dpY09iamVjdC5kYXRhLnByb3BlcnRpZXMuZmlsdGVyKHAgPT4ge1xyXG4gICAgcmV0dXJuIC8uKm5vZGVWYWx1ZU1hcC4qL2dpLnRlc3QoT2JqZWN0LmtleXMocClbMF0pO1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBtYXRlcmlhbDogYW55ID0gYXdhaXQgVXRpbHNTZXJ2aWNlLmdldE1hdGVyaWFsQnlFbnRpdHkoc2NlbmUsIGFwcCwgbWVudUxvZ2ljT2JqZWN0LCBhcGlVcmwpO1xyXG4gIGlmICghbWF0ZXJpYWwpIHtcclxuICAgIC8vIGVycm9yXHJcbiAgICBjb25zb2xlLndhcm4oYE9iamVjdCB3aXRoIGEgc2NlbmUgbmFtZSAke21lbnVMb2dpY09iamVjdC5zY2VuZU5hbWV9IGNhbm5vdCBiZSBmb3VuZCBpbiB0aGUgc2NlbmUgYW5kIGNhbm5vdCBiZSBsb2FkZWRgKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9iamVjdDNkcyA9IFV0aWxzU2VydmljZS5maW5kT2JqZWN0M2RzQnlNYXRlcmlhbEVudGl0eShhcHBEYXRhLCBtZW51TG9naWNPYmplY3QpO1xyXG5cclxuICBpZiAoIW9iamVjdDNkcy5sZW5ndGgpIHtcclxuICAgIGNvbnNvbGUud2Fybihgc2V0TWF0ZXJpYWxUZXh0dXJlIG1hdGVyaWFsICR7bWVudUxvZ2ljT2JqZWN0LnNjZW5lTmFtZX0gbm8gb2JqZWN0M2RzIGZvdW5kYCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBvYmplY3QzZHMuZm9yRWFjaChvYmplY3QzZCA9PiB7XHJcbiAgICAvLyBpbiBjYXNlIHdlIGhhdmUgc2V2ZXJhbCBvYmplY3QgbmFtZXMsIHNwbGl0dGVkIGJ5ICcsJ1xyXG4gICAgY29uc3Qgb2JqZWN0M2RTY2VuZU5hbWVzID0gb2JqZWN0M2Quc2NlbmVOYW1lLnNwbGl0KCcsJykubWFwKG4gPT4gbi50cmltKCkpO1xyXG5cclxuICAgIG9iamVjdDNkU2NlbmVOYW1lcy5mb3JFYWNoKHNuID0+IHtcclxuICAgICAgb2JqZWN0M2QgPSBVdGlsc1NlcnZpY2UuZ2V0T2JqZWN0QnlOYW1lKHNjZW5lLCBzbik7XHJcbiAgICAgIGlmIChvYmplY3QzZCkge1xyXG4gICAgICAgIGlmICghdGV4dHVyZVByb3BlcnRpZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICBzZXREZWZhdWx0VGV4dHVyZShhcHAsIG1hdGVyaWFsKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG9iamVjdDNkLm1hdGVyaWFsICYmIG9iamVjdDNkLm1hdGVyaWFsLm5hbWUgPT09IG1hdGVyaWFsLm5hbWUpIHtcclxuICAgICAgICAgICAgc2V0VGV4dHVyZU5vZGVWYWx1ZXMob2JqZWN0M2QubWF0ZXJpYWwsIHRleHR1cmVOb2RlVmFsdWVNYXBQcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgc2V0VGV4dHVyZXMoYXBwLCBvYmplY3QzZC5tYXRlcmlhbCwgdGV4dHVyZVByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0VGV4dHVyZU5vZGVWYWx1ZXMobWF0ZXJpYWwsIHRleHR1cmVOb2RlVmFsdWVNYXBQcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgc2V0VGV4dHVyZXMoYXBwLCBtYXRlcmlhbCwgdGV4dHVyZVByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICBvYmplY3QzZC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBjb25zb2xlLndhcm4oYHNldE1hdGVyaWFsVGV4dHVyZSAtIG9iamVjdDNkICR7c259IG5vdCBmb3VuZGApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn07XHJcbiJdfQ==