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
export const setObjectMenuMaterial = (scene, app, appData, menuLogicObject, apiUrl) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const material = yield UtilsService.getMaterialByEntity(scene, app, menuLogicObject, apiUrl);
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
        UtilsService.changeMaterialOnObject3dEntities(scene, object3ds, material);
    }
    catch (err) {
        console.error(`setObjectMenuMaterial error`, err);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LW9iamVjdC1tZW51LW1hdGVyaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FjdGlvbnMvc2V0LW9iamVjdC1tZW51LW1hdGVyaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBRyxDQUFPLEtBQUssRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsRUFBRTtJQUMxRixJQUFJO1FBQ0YsTUFBTSxRQUFRLEdBQUcsTUFBTSxZQUFZLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLFFBQVE7WUFDUixPQUFPLENBQUMsSUFBSSxDQUFDLDRCQUE0QixlQUFlLENBQUMsU0FBUyxvREFBb0QsQ0FBQyxDQUFDO1lBQ3hILE9BQU87U0FDUjtRQUNELE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyw2QkFBNkIsQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFdkYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7WUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyxrQ0FBa0MsZUFBZSxDQUFDLFNBQVMscUJBQXFCLENBQUMsQ0FBQztZQUMvRixPQUFPO1NBQ1I7UUFFRCxZQUFZLENBQUMsZ0NBQWdDLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUMzRTtJQUFDLE9BQU8sR0FBRyxFQUFFO1FBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUNuRDtBQUNILENBQUMsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbHMuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0T2JqZWN0TWVudU1hdGVyaWFsID0gYXN5bmMgKHNjZW5lLCBhcHAsIGFwcERhdGEsIG1lbnVMb2dpY09iamVjdCwgYXBpVXJsKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IG1hdGVyaWFsID0gYXdhaXQgVXRpbHNTZXJ2aWNlLmdldE1hdGVyaWFsQnlFbnRpdHkoc2NlbmUsIGFwcCwgbWVudUxvZ2ljT2JqZWN0LCBhcGlVcmwpO1xyXG4gICAgaWYgKCFtYXRlcmlhbCkge1xyXG4gICAgICAvLyBlcnJvclxyXG4gICAgICBjb25zb2xlLndhcm4oYE9iamVjdCB3aXRoIGEgc2NlbmUgbmFtZSAke21lbnVMb2dpY09iamVjdC5zY2VuZU5hbWV9IGNhbm5vdCBiZSBmb3VuZCBpbiB0aGUgc2NlbmUgYW5kIGNhbm5vdCBiZSBsb2FkZWRgKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgb2JqZWN0M2RzID0gVXRpbHNTZXJ2aWNlLmZpbmRPYmplY3QzZHNCeU1hdGVyaWFsRW50aXR5KGFwcERhdGEsIG1lbnVMb2dpY09iamVjdCk7XHJcblxyXG4gICAgaWYgKCFvYmplY3QzZHMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnNvbGUud2Fybihgc2V0T2JqZWN0TWVudU1hdGVyaWFsIG1hdGVyaWFsICR7bWVudUxvZ2ljT2JqZWN0LnNjZW5lTmFtZX0gbm8gb2JqZWN0M2RzIGZvdW5kYCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBVdGlsc1NlcnZpY2UuY2hhbmdlTWF0ZXJpYWxPbk9iamVjdDNkRW50aXRpZXMoc2NlbmUsIG9iamVjdDNkcywgbWF0ZXJpYWwpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgY29uc29sZS5lcnJvcihgc2V0T2JqZWN0TWVudU1hdGVyaWFsIGVycm9yYCwgZXJyKTtcclxuICB9XHJcbn07XHJcbiJdfQ==