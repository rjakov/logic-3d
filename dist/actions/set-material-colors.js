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
const getMaterialColors = (material) => {
    if (material.isMeshNodeMaterial) {
        return Object.keys(material.nodeRGBMap);
    }
    else if (material.isMeshStandardMaterial) {
        return ['color', 'emissive'];
    }
    else {
        return [];
    }
};
const setColors = (app, material, colorProperties) => {
    const colors = getMaterialColors(material);
    colorProperties.forEach(colorProperty => {
        const colorName = Object.keys(colorProperty)[0];
        if (colors.indexOf(colorName) < 0) {
            return;
        }
        const color = new v3d.Color(Object.values(colorProperty)[0]);
        color.convertSRGBToLinear();
        const r = color.r;
        const g = color.g;
        const b = color.b;
        if (material.isMeshNodeMaterial) {
            const rgbIdx = material.nodeRGBMap[colorName];
            material.nodeRGB[rgbIdx].x = r;
            material.nodeRGB[rgbIdx].y = g;
            material.nodeRGB[rgbIdx].z = b;
        }
        else {
            material[colorName].r = r;
            material[colorName].g = g;
            material[colorName].b = b;
        }
    });
    material.needsUpdate = true;
    if (material === app.worldMaterial) {
        app.updateEnvironment(material);
    }
};
export const setMaterialColors = (scene, app, appData, menuLogicObject, apiUrl, args) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!(menuLogicObject.data && menuLogicObject.data.properties && menuLogicObject.data.properties.length))
            return;
        const colorProperties = menuLogicObject.data.properties.filter(p => {
            return /.*color.*/gi.test(Object.keys(p)[0]);
        });
        if (!colorProperties.length)
            return;
        const material = yield UtilsService.getMaterialByEntity(scene, app, menuLogicObject, apiUrl);
        if (!material) {
            // error
            console.warn(`Object with a scene name ${menuLogicObject.sceneName} cannot be found in the scene and cannot be loaded`);
            return;
        }
        const object3ds = UtilsService.findObject3dsByMaterialEntity(appData, menuLogicObject);
        if (!object3ds.length) {
            console.warn(`setMaterialColors material ${menuLogicObject.sceneName} no object3ds found`);
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
                        material.nodeRGB = _.cloneDeep(object3d.material.nodeRGB);
                        material.nodeRGBArr = _.cloneDeep(object3d.material.nodeRGBArr);
                        setColors(app, material, colorProperties);
                        object3d.material = material;
                    }
                    else {
                        setColors(app, material, colorProperties);
                        object3d.material = material;
                    }
                }
                else {
                    {
                        console.warn(`setMaterialColors - object3d ${sn} not found`);
                    }
                }
            });
        });
        material.needsUpdate = true;
        if (material === app.worldMaterial) {
            app.updateEnvironment(material);
        }
    }
    catch (err) {
        console.error(`setMaterialColors error`, err);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LW1hdGVyaWFsLWNvbG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3NldC1tYXRlcmlhbC1jb2xvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sS0FBSyxDQUFDLE1BQU0sUUFBUSxDQUFDO0FBSzVCLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxRQUFhLEVBQVksRUFBRTtJQUNwRCxJQUFJLFFBQVEsQ0FBQyxrQkFBa0IsRUFBRTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0tBQ3pDO1NBQU0sSUFBSSxRQUFRLENBQUMsc0JBQXNCLEVBQUU7UUFDMUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztLQUM5QjtTQUFNO1FBQ0wsT0FBTyxFQUFFLENBQUM7S0FDWDtBQUNILENBQUMsQ0FBQztBQUVGLE1BQU0sU0FBUyxHQUFHLENBQUMsR0FBUSxFQUFFLFFBQWEsRUFBRSxlQUFzQixFQUFRLEVBQUU7SUFDMUUsTUFBTSxNQUFNLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFM0MsZUFBZSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtRQUN0QyxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRWhELElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakMsT0FBTztTQUNSO1FBRUQsTUFBTSxLQUFLLEdBQUcsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxLQUFLLENBQUMsbUJB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LEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDL0M7QUFDSCxDQUFDLENBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UnO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7IEV4ZWN1dGVBY3Rpb25Bcmd1bWVudHMgfSBmcm9tICcuLi9tb2RlbC9leGVjdXRlLWFjdGlvbi1hcmd1bWVudHMnO1xyXG5cclxuZGVjbGFyZSBjb25zdCB2M2Q6IGFueTtcclxuXHJcbmNvbnN0IGdldE1hdGVyaWFsQ29sb3JzID0gKG1hdGVyaWFsOiBhbnkpOiBzdHJpbmdbXSA9PiB7XHJcbiAgaWYgKG1hdGVyaWFsLmlzTWVzaE5vZGVNYXRlcmlhbCkge1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG1hdGVyaWFsLm5vZGVSR0JNYXApO1xyXG4gIH0gZWxzZSBpZiAobWF0ZXJpYWwuaXNNZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xyXG4gICAgcmV0dXJuIFsnY29sb3InLCAnZW1pc3NpdmUnXTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IHNldENvbG9ycyA9IChhcHA6IGFueSwgbWF0ZXJpYWw6IGFueSwgY29sb3JQcm9wZXJ0aWVzOiBhbnlbXSk6IHZvaWQgPT4ge1xyXG4gIGNvbnN0IGNvbG9ycyA9IGdldE1hdGVyaWFsQ29sb3JzKG1hdGVyaWFsKTtcclxuXHJcbiAgY29sb3JQcm9wZXJ0aWVzLmZvckVhY2goY29sb3JQcm9wZXJ0eSA9PiB7XHJcbiAgICBjb25zdCBjb2xvck5hbWUgPSBPYmplY3Qua2V5cyhjb2xvclByb3BlcnR5KVswXTtcclxuXHJcbiAgICBpZiAoY29sb3JzLmluZGV4T2YoY29sb3JOYW1lKSA8IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbG9yID0gbmV3IHYzZC5Db2xvcihPYmplY3QudmFsdWVzKGNvbG9yUHJvcGVydHkpWzBdKTtcclxuICAgIGNvbG9yLmNvbnZlcnRTUkdCVG9MaW5lYXIoKTtcclxuICAgIGNvbnN0IHIgPSBjb2xvci5yO1xyXG4gICAgY29uc3QgZyA9IGNvbG9yLmc7XHJcbiAgICBjb25zdCBiID0gY29sb3IuYjtcclxuXHJcbiAgICBpZiAobWF0ZXJpYWwuaXNNZXNoTm9kZU1hdGVyaWFsKSB7XHJcbiAgICAgIGNvbnN0IHJnYklkeCA9IG1hdGVyaWFsLm5vZGVSR0JNYXBbY29sb3JOYW1lXTtcclxuICAgICAgbWF0ZXJpYWwubm9kZVJHQltyZ2JJZHhdLnggPSByO1xyXG4gICAgICBtYXRlcmlhbC5ub2RlUkdCW3JnYklkeF0ueSA9IGc7XHJcbiAgICAgIG1hdGVyaWFsLm5vZGVSR0JbcmdiSWR4XS56ID0gYjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1hdGVyaWFsW2NvbG9yTmFtZV0uciA9IHI7XHJcbiAgICAgIG1hdGVyaWFsW2NvbG9yTmFtZV0uZyA9IGc7XHJcbiAgICAgIG1hdGVyaWFsW2NvbG9yTmFtZV0uYiA9IGI7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIG1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgaWYgKG1hdGVyaWFsID09PSBhcHAud29ybGRNYXRlcmlhbCkge1xyXG4gICAgYXBwLnVwZGF0ZUVudmlyb25tZW50KG1hdGVyaWFsKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0TWF0ZXJpYWxDb2xvcnMgPSBhc3luYyAoc2NlbmUsIGFwcCwgYXBwRGF0YSwgbWVudUxvZ2ljT2JqZWN0LCBhcGlVcmwsIGFyZ3M6IEV4ZWN1dGVBY3Rpb25Bcmd1bWVudHMpID0+IHtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGlmICghKG1lbnVMb2dpY09iamVjdC5kYXRhICYmIG1lbnVMb2dpY09iamVjdC5kYXRhLnByb3BlcnRpZXMgJiYgbWVudUxvZ2ljT2JqZWN0LmRhdGEucHJvcGVydGllcy5sZW5ndGgpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgY29sb3JQcm9wZXJ0aWVzID0gbWVudUxvZ2ljT2JqZWN0LmRhdGEucHJvcGVydGllcy5maWx0ZXIocCA9PiB7XHJcbiAgICAgIHJldHVybiAvLipjb2xvci4qL2dpLnRlc3QoT2JqZWN0LmtleXMocClbMF0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKCFjb2xvclByb3BlcnRpZXMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbWF0ZXJpYWw6IGFueSA9IGF3YWl0IFV0aWxzU2VydmljZS5nZXRNYXRlcmlhbEJ5RW50aXR5KHNjZW5lLCBhcHAsIG1lbnVMb2dpY09iamVjdCwgYXBpVXJsKTtcclxuICAgIGlmICghbWF0ZXJpYWwpIHtcclxuICAgICAgLy8gZXJyb3JcclxuICAgICAgY29uc29sZS53YXJuKGBPYmplY3Qgd2l0aCBhIHNjZW5lIG5hbWUgJHttZW51TG9naWNPYmplY3Quc2NlbmVOYW1lfSBjYW5ub3QgYmUgZm91bmQgaW4gdGhlIHNjZW5lIGFuZCBjYW5ub3QgYmUgbG9hZGVkYCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvYmplY3QzZHMgPSBVdGlsc1NlcnZpY2UuZmluZE9iamVjdDNkc0J5TWF0ZXJpYWxFbnRpdHkoYXBwRGF0YSwgbWVudUxvZ2ljT2JqZWN0KTtcclxuXHJcbiAgICBpZiAoIW9iamVjdDNkcy5sZW5ndGgpIHtcclxuICAgICAgY29uc29sZS53YXJuKGBzZXRNYXRlcmlhbENvbG9ycyBtYXRlcmlhbCAke21lbnVMb2dpY09iamVjdC5zY2VuZU5hbWV9IG5vIG9iamVjdDNkcyBmb3VuZGApO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgb2JqZWN0M2RzLmZvckVhY2gob2JqZWN0M2QgPT4ge1xyXG4gICAgICAvLyBpbiBjYXNlIHdlIGhhdmUgc2V2ZXJhbCBvYmplY3QgbmFtZXMsIHNwbGl0dGVkIGJ5ICcsJ1xyXG4gICAgICBjb25zdCBvYmplY3QzZFNjZW5lTmFtZXMgPSBvYmplY3QzZC5zY2VuZU5hbWUuc3BsaXQoJywnKS5tYXAobiA9PiBuLnRyaW0oKSk7XHJcblxyXG4gICAgICBvYmplY3QzZFNjZW5lTmFtZXMuZm9yRWFjaChzbiA9PiB7XHJcbiAgICAgICAgb2JqZWN0M2QgPSBVdGlsc1NlcnZpY2UuZ2V0T2JqZWN0QnlOYW1lKHNjZW5lLCBzbik7XHJcbiAgICAgICAgaWYgKG9iamVjdDNkKSB7XHJcbiAgICAgICAgICBpZiAob2JqZWN0M2QubWF0ZXJpYWwgJiYgb2JqZWN0M2QubWF0ZXJpYWwubmFtZSA9PT0gbWF0ZXJpYWwubmFtZSkge1xyXG4gICAgICAgICAgICBjb25zdCBtYXRlcmlhbCA9IG9iamVjdDNkLm1hdGVyaWFsLmNsb25lKCk7XHJcbiAgICAgICAgICAgIG1hdGVyaWFsLm5vZGVSR0IgPSBfLmNsb25lRGVlcChvYmplY3QzZC5tYXRlcmlhbC5ub2RlUkdCKTtcclxuICAgICAgICAgICAgbWF0ZXJpYWwubm9kZVJHQkFyciA9IF8uY2xvbmVEZWVwKG9iamVjdDNkLm1hdGVyaWFsLm5vZGVSR0JBcnIpO1xyXG4gICAgICAgICAgICBzZXRDb2xvcnMoYXBwLCBtYXRlcmlhbCwgY29sb3JQcm9wZXJ0aWVzKTtcclxuICAgICAgICAgICAgb2JqZWN0M2QubWF0ZXJpYWwgPSBtYXRlcmlhbDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldENvbG9ycyhhcHAsIG1hdGVyaWFsLCBjb2xvclByb3BlcnRpZXMpO1xyXG4gICAgICAgICAgICBvYmplY3QzZC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihgc2V0TWF0ZXJpYWxDb2xvcnMgLSBvYmplY3QzZCAke3NufSBub3QgZm91bmRgKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgIGlmIChtYXRlcmlhbCA9PT0gYXBwLndvcmxkTWF0ZXJpYWwpIHtcclxuICAgICAgYXBwLnVwZGF0ZUVudmlyb25tZW50KG1hdGVyaWFsKTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHNldE1hdGVyaWFsQ29sb3JzIGVycm9yYCwgZXJyKTtcclxuICB9XHJcbn07XHJcbiJdfQ==