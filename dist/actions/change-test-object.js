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
export const changeTestObject = (scene, app, appData, logic, menuLogicObject, apiUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const objectToChange = yield (UtilsService.getObjectByEntity(scene, app, menuLogicObject, apiUrl));
    const defaultObjectEntity = logic.data.objects.find((o) => o.defaultObject);
    const holderGroupObjectEntity = UtilsService.findParentObjectByObject3dEntity(appData, menuLogicObject);
    const defaultObject = UtilsService.getObjectByName(scene, defaultObjectEntity.sceneName);
    const holderGroupObject = UtilsService.getObjectByName(scene, holderGroupObjectEntity.sceneName);
    if (!objectToChange || !defaultObject || !holderGroupObject) {
        console.warn(`Some of the objects with the scene names ${menuLogicObject.sceneName}, ${defaultObjectEntity.sceneName}, ${holderGroupObjectEntity.sceneName} are not found`);
        return;
    }
    const material = holderGroupObject.children.length
        ? holderGroupObject.children[0].material.clone()
        : defaultObject.material.clone();
    holderGroupObject.remove(...holderGroupObject.children);
    if (menuLogicObject.defaultObject) {
        objectToChange.visible = true;
    }
    else {
        defaultObject.visible = false;
        holderGroupObject.add(objectToChange);
    }
    objectToChange.material = material;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbmdlLXRlc3Qtb2JqZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FjdGlvbnMvY2hhbmdlLXRlc3Qtb2JqZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUM5QixLQUFLLEVBQ0wsR0FBRyxFQUNILE9BQU8sRUFDUCxLQUFLLEVBQ0wsZUFBZSxFQUNmLE1BQU0sRUFDTixFQUFFO0lBQ0YsTUFBTSxjQUFjLEdBQUcsTUFBWSxDQUNqQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsTUFBTSxDQUFDLENBQ25FLENBQUM7SUFDSCxNQUFNLG1CQUFtQixHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzVFLE1BQU0sdUJBQXVCLEdBQUcsWUFBWSxDQUFDLGdDQUFnQyxDQUMzRSxPQUFPLEVBQ1AsZUFBZSxDQUNoQixDQUFDO0lBQ0YsTUFBTSxhQUFhLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FDaEQsS0FBSyxFQUNMLG1CQUFtQixDQUFDLFNBQVMsQ0FDOUIsQ0FBQztJQUNGLE1BQU0saUJBQWlCLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FDcEQsS0FBSyxFQUNMLHVCQUF1QixDQUFDLFNBQVMsQ0FDbEMsQ0FBQztJQUNGLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtRQUMzRCxPQUFPLENBQUMsSUFBSSxDQUNWLDRDQUE0QyxlQUFlLENBQUMsU0FBUyxLQUFLLG1CQUFtQixDQUFDLFNBQVMsS0FBSyx1QkFBdUIsQ0FBQyxTQUFTLGdCQUFnQixDQUM5SixDQUFDO1FBQ0YsT0FBTztLQUNSO0lBRUQsTUFBTSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDLE1BQU07UUFDaEQsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFO1FBQ2hELENBQUMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBRW5DLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxHQUFHLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hELElBQUksZUFBZSxDQUFDLGFBQWEsRUFBRTtRQUNqQyxjQUFjLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztLQUMvQjtTQUFNO1FBQ0wsYUFBYSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDOUIsaUJBQWlCLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ3ZDO0lBRUQsY0FBYyxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDckMsQ0FBQyxDQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VUZXN0T2JqZWN0ID0gYXN5bmMgKFxyXG4gIHNjZW5lLCBcclxuICBhcHAsXHJcbiAgYXBwRGF0YSxcclxuICBsb2dpYyxcclxuICBtZW51TG9naWNPYmplY3QsXHJcbiAgYXBpVXJsXHJcbikgPT4ge1xyXG4gIGNvbnN0IG9iamVjdFRvQ2hhbmdlID0gYXdhaXQgKDxhbnk+KFxyXG4gICAgVXRpbHNTZXJ2aWNlLmdldE9iamVjdEJ5RW50aXR5KHNjZW5lLCBhcHAsIG1lbnVMb2dpY09iamVjdCwgYXBpVXJsKVxyXG4gICkpO1xyXG4gIGNvbnN0IGRlZmF1bHRPYmplY3RFbnRpdHkgPSBsb2dpYy5kYXRhLm9iamVjdHMuZmluZCgobykgPT4gby5kZWZhdWx0T2JqZWN0KTtcclxuICBjb25zdCBob2xkZXJHcm91cE9iamVjdEVudGl0eSA9IFV0aWxzU2VydmljZS5maW5kUGFyZW50T2JqZWN0QnlPYmplY3QzZEVudGl0eShcclxuICAgIGFwcERhdGEsXHJcbiAgICBtZW51TG9naWNPYmplY3RcclxuICApO1xyXG4gIGNvbnN0IGRlZmF1bHRPYmplY3QgPSBVdGlsc1NlcnZpY2UuZ2V0T2JqZWN0QnlOYW1lKFxyXG4gICAgc2NlbmUsXHJcbiAgICBkZWZhdWx0T2JqZWN0RW50aXR5LnNjZW5lTmFtZVxyXG4gICk7XHJcbiAgY29uc3QgaG9sZGVyR3JvdXBPYmplY3QgPSBVdGlsc1NlcnZpY2UuZ2V0T2JqZWN0QnlOYW1lKFxyXG4gICAgc2NlbmUsXHJcbiAgICBob2xkZXJHcm91cE9iamVjdEVudGl0eS5zY2VuZU5hbWVcclxuICApO1xyXG4gIGlmICghb2JqZWN0VG9DaGFuZ2UgfHwgIWRlZmF1bHRPYmplY3QgfHwgIWhvbGRlckdyb3VwT2JqZWN0KSB7XHJcbiAgICBjb25zb2xlLndhcm4oXHJcbiAgICAgIGBTb21lIG9mIHRoZSBvYmplY3RzIHdpdGggdGhlIHNjZW5lIG5hbWVzICR7bWVudUxvZ2ljT2JqZWN0LnNjZW5lTmFtZX0sICR7ZGVmYXVsdE9iamVjdEVudGl0eS5zY2VuZU5hbWV9LCAke2hvbGRlckdyb3VwT2JqZWN0RW50aXR5LnNjZW5lTmFtZX0gYXJlIG5vdCBmb3VuZGBcclxuICAgICk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBtYXRlcmlhbCA9IGhvbGRlckdyb3VwT2JqZWN0LmNoaWxkcmVuLmxlbmd0aFxyXG4gICAgPyBob2xkZXJHcm91cE9iamVjdC5jaGlsZHJlblswXS5tYXRlcmlhbC5jbG9uZSgpXHJcbiAgICA6IGRlZmF1bHRPYmplY3QubWF0ZXJpYWwuY2xvbmUoKTtcclxuXHJcbiAgaG9sZGVyR3JvdXBPYmplY3QucmVtb3ZlKC4uLmhvbGRlckdyb3VwT2JqZWN0LmNoaWxkcmVuKTtcclxuICBpZiAobWVudUxvZ2ljT2JqZWN0LmRlZmF1bHRPYmplY3QpIHtcclxuICAgIG9iamVjdFRvQ2hhbmdlLnZpc2libGUgPSB0cnVlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkZWZhdWx0T2JqZWN0LnZpc2libGUgPSBmYWxzZTtcclxuICAgIGhvbGRlckdyb3VwT2JqZWN0LmFkZChvYmplY3RUb0NoYW5nZSk7XHJcbiAgfVxyXG5cclxuICBvYmplY3RUb0NoYW5nZS5tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG59O1xyXG4iXX0=