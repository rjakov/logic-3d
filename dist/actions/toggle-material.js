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
const materialsDictionary = new Map();
export const toggleMaterial = (scene, app, appData, menuLogicObject, apiUrl) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let material = yield UtilsService.getMaterialByEntity(scene, app, menuLogicObject, apiUrl);
        if (!material) {
            // error
            console.warn(`Object with a scene name ${menuLogicObject.sceneName} cannot be found in the scene and cannot be loaded`);
            return;
        }
        const object3ds = UtilsService.findObject3dsByMaterialEntity(appData, menuLogicObject);
        if (!object3ds.length) {
            console.warn(`setObjectMenuMaterial material ${menuLogicObject.sceneName} no object3ds found`);
            return;
        }
        const object3dSceneNames = UtilsService.getObject3dNamesFromObject3dSceneName(object3ds[0]);
        const object3d = UtilsService.getObjectByName(scene, object3dSceneNames[0]);
        if (object3d.material.name === menuLogicObject.sceneName) {
            material = materialsDictionary.get(menuLogicObject.sceneName);
        }
        else {
            materialsDictionary.set(menuLogicObject.sceneName, object3d.material);
        }
        UtilsService.changeMaterialOnObject3dEntities(scene, object3ds, material);
    }
    catch (err) {
        console.error(`setObjectMenuMaterial error`, err);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLW1hdGVyaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FjdGlvbnMvdG9nZ2xlLW1hdGVyaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQTtBQUV4RCxNQUFNLG1CQUFtQixHQUFHLElBQUksR0FBRyxFQUFFLENBQUE7QUFFckMsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLENBQzVCLEtBQUssRUFDTCxHQUFHLEVBQ0gsT0FBTyxFQUNQLGVBQWUsRUFDZixNQUFNLEVBQ04sRUFBRTtJQUNGLElBQUk7UUFDRixJQUFJLFFBQVEsR0FBRyxNQUFNLFlBQVksQ0FBQyxtQkFBbUIsQ0FDbkQsS0FBSyxFQUNMLEdBQUcsRUFDSCxlQUFlLEVBQ2YsTUFBTSxDQUNQLENBQUE7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsUUFBUTtZQUNSLE9BQU8sQ0FBQyxJQUFJLENBQ1YsNEJBQTRCLGVBQWUsQ0FBQyxTQUFTLG9EQUFvRCxDQUMxRyxDQUFBO1lBQ0QsT0FBTTtTQUNQO1FBRUQsTUFBTSxTQUFTLEdBQUcsWUFBWSxDQUFDLDZCQUE2QixDQUMxRCxPQUFPLEVBQ1AsZUFBZSxDQUNoQixDQUFBO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDckIsT0FBTyxDQUFDLElBQUksQ0FDVixrQ0FBa0MsZUFBZSxDQUFDLFNBQVMscUJBQXFCLENBQ2pGLENBQUE7WUFDRCxPQUFNO1NBQ1A7UUFFRCxNQUFNLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxxQ0FBcUMsQ0FDM0UsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUNiLENBQUE7UUFFRCxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBRTNFLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEtBQUssZUFBZSxDQUFDLFNBQVMsRUFBRTtZQUN4RCxRQUFRLEdBQUcsbUJBQW1CLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvRDthQUFNO1lBQ0wsbUJBQW1CLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZFO1FBRUQsWUFBWSxDQUFDLGdDQUFnQyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUE7S0FDMUU7SUFBQyxPQUFPLEdBQUcsRUFBRTtRQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxDQUFDLENBQUE7S0FDbEQ7QUFDSCxDQUFDLENBQUEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UnXHJcblxyXG5jb25zdCBtYXRlcmlhbHNEaWN0aW9uYXJ5ID0gbmV3IE1hcCgpXHJcblxyXG5leHBvcnQgY29uc3QgdG9nZ2xlTWF0ZXJpYWwgPSBhc3luYyAoXHJcbiAgc2NlbmUsXHJcbiAgYXBwLFxyXG4gIGFwcERhdGEsXHJcbiAgbWVudUxvZ2ljT2JqZWN0LFxyXG4gIGFwaVVybFxyXG4pID0+IHtcclxuICB0cnkge1xyXG4gICAgbGV0IG1hdGVyaWFsID0gYXdhaXQgVXRpbHNTZXJ2aWNlLmdldE1hdGVyaWFsQnlFbnRpdHkoXHJcbiAgICAgIHNjZW5lLFxyXG4gICAgICBhcHAsXHJcbiAgICAgIG1lbnVMb2dpY09iamVjdCxcclxuICAgICAgYXBpVXJsXHJcbiAgICApXHJcbiAgICBpZiAoIW1hdGVyaWFsKSB7XHJcbiAgICAgIC8vIGVycm9yXHJcbiAgICAgIGNvbnNvbGUud2FybihcclxuICAgICAgICBgT2JqZWN0IHdpdGggYSBzY2VuZSBuYW1lICR7bWVudUxvZ2ljT2JqZWN0LnNjZW5lTmFtZX0gY2Fubm90IGJlIGZvdW5kIGluIHRoZSBzY2VuZSBhbmQgY2Fubm90IGJlIGxvYWRlZGBcclxuICAgICAgKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvYmplY3QzZHMgPSBVdGlsc1NlcnZpY2UuZmluZE9iamVjdDNkc0J5TWF0ZXJpYWxFbnRpdHkoXHJcbiAgICAgIGFwcERhdGEsXHJcbiAgICAgIG1lbnVMb2dpY09iamVjdFxyXG4gICAgKVxyXG5cclxuICAgIGlmICghb2JqZWN0M2RzLmxlbmd0aCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgICAgYHNldE9iamVjdE1lbnVNYXRlcmlhbCBtYXRlcmlhbCAke21lbnVMb2dpY09iamVjdC5zY2VuZU5hbWV9IG5vIG9iamVjdDNkcyBmb3VuZGBcclxuICAgICAgKVxyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvYmplY3QzZFNjZW5lTmFtZXMgPSBVdGlsc1NlcnZpY2UuZ2V0T2JqZWN0M2ROYW1lc0Zyb21PYmplY3QzZFNjZW5lTmFtZShcclxuICAgICAgb2JqZWN0M2RzWzBdXHJcbiAgICApXHJcblxyXG4gICAgY29uc3Qgb2JqZWN0M2QgPSBVdGlsc1NlcnZpY2UuZ2V0T2JqZWN0QnlOYW1lKHNjZW5lLCBvYmplY3QzZFNjZW5lTmFtZXNbMF0pXHJcblxyXG4gICAgaWYgKG9iamVjdDNkLm1hdGVyaWFsLm5hbWUgPT09IG1lbnVMb2dpY09iamVjdC5zY2VuZU5hbWUpIHtcclxuICAgICAgbWF0ZXJpYWwgPSBtYXRlcmlhbHNEaWN0aW9uYXJ5LmdldChtZW51TG9naWNPYmplY3Quc2NlbmVOYW1lKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1hdGVyaWFsc0RpY3Rpb25hcnkuc2V0KG1lbnVMb2dpY09iamVjdC5zY2VuZU5hbWUsIG9iamVjdDNkLm1hdGVyaWFsKTtcclxuICAgIH1cclxuXHJcbiAgICBVdGlsc1NlcnZpY2UuY2hhbmdlTWF0ZXJpYWxPbk9iamVjdDNkRW50aXRpZXMoc2NlbmUsIG9iamVjdDNkcywgbWF0ZXJpYWwpXHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGBzZXRPYmplY3RNZW51TWF0ZXJpYWwgZXJyb3JgLCBlcnIpXHJcbiAgfVxyXG59XHJcbiJdfQ==