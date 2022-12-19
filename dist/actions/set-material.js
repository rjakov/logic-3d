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
export const setMaterial = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const { actionArguments, apiUrl, app, logic, scene } = args;
    if (!actionArguments || !scene) {
        console.warn(`Action: [showHideObjects] actionArguments or scene is absent`);
        return;
    }
    let { object3d, material } = actionArguments;
    if (!object3d || !material) {
        console.warn(`Action: [setMaterial] object or material is absent`);
        return;
    }
    const objectEntity = logic.object3ds.find(o => o.id === object3d);
    if (!objectEntity) {
        console.warn(`Action: [setMaterial] object with id ${object3d} is not attached to logic`);
        return;
    }
    object3d = yield UtilsService.getObjectByEntity(scene, app, objectEntity, apiUrl);
    const materialEntity = logic.materials.find(o => o.id === material);
    if (!materialEntity) {
        console.warn(`Action: [setMaterial] material with id ${material} is not attached to logic`);
        return;
    }
    material = yield UtilsService.getMaterialByEntity(scene, app, materialEntity, apiUrl);
    if (object3d && material)
        object3d.material = material;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2V0LW1hdGVyaWFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FjdGlvbnMvc2V0LW1hdGVyaWFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FBTyxJQUE0QixFQUFFLEVBQUU7SUFDaEUsTUFBTSxFQUFFLGVBQWUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxJQUFJLENBQUM7SUFDNUQsSUFBSSxDQUFDLGVBQWUsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUM5QixPQUFPLENBQUMsSUFBSSxDQUFDLDhEQUE4RCxDQUFDLENBQUM7UUFDN0UsT0FBTztLQUNSO0lBQ0QsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsR0FBRyxlQUFlLENBQUM7SUFDN0MsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsRUFBRTtRQUMxQixPQUFPLENBQUMsSUFBSSxDQUFDLG9EQUFvRCxDQUFDLENBQUM7UUFDbkUsT0FBTztLQUNSO0lBRUQsTUFBTSxZQUFZLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxDQUFDO0lBRWxFLElBQUksQ0FBQyxZQUFZLEVBQUU7UUFDakIsT0FBTyxDQUFDLElBQUksQ0FBQyx3Q0FBd0MsUUFBUSwyQkFBMkIsQ0FBQyxDQUFDO1FBQzFGLE9BQU87S0FDUjtJQUVELFFBQVEsR0FBRyxNQUFNLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVsRixNQUFNLGNBQWMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLENBQUM7SUFFcEUsSUFBSSxDQUFDLGNBQWMsRUFBRTtRQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLDBDQUEwQyxRQUFRLDJCQUEyQixDQUFDLENBQUM7UUFDNUYsT0FBTztLQUNSO0lBRUQsUUFBUSxHQUFHLE1BQU0sWUFBWSxDQUFDLG1CQUFtQixDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsY0FBYyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXRGLElBQUksUUFBUSxJQUFJLFFBQVE7UUFBRSxRQUFRLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6RCxDQUFDLENBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4ZWN1dGVBY3Rpb25Bcmd1bWVudHMgfSBmcm9tICcuLi9tb2RlbC9leGVjdXRlLWFjdGlvbi1hcmd1bWVudHMnO1xyXG5pbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRNYXRlcmlhbCA9IGFzeW5jIChhcmdzOiBFeGVjdXRlQWN0aW9uQXJndW1lbnRzKSA9PiB7XHJcbiAgY29uc3QgeyBhY3Rpb25Bcmd1bWVudHMsIGFwaVVybCwgYXBwLCBsb2dpYywgc2NlbmUgfSA9IGFyZ3M7XHJcbiAgaWYgKCFhY3Rpb25Bcmd1bWVudHMgfHwgIXNjZW5lKSB7XHJcbiAgICBjb25zb2xlLndhcm4oYEFjdGlvbjogW3Nob3dIaWRlT2JqZWN0c10gYWN0aW9uQXJndW1lbnRzIG9yIHNjZW5lIGlzIGFic2VudGApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBsZXQgeyBvYmplY3QzZCwgbWF0ZXJpYWwgfSA9IGFjdGlvbkFyZ3VtZW50cztcclxuICBpZiAoIW9iamVjdDNkIHx8ICFtYXRlcmlhbCkge1xyXG4gICAgY29uc29sZS53YXJuKGBBY3Rpb246IFtzZXRNYXRlcmlhbF0gb2JqZWN0IG9yIG1hdGVyaWFsIGlzIGFic2VudGApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb2JqZWN0RW50aXR5ID0gbG9naWMub2JqZWN0M2RzLmZpbmQobyA9PiBvLmlkID09PSBvYmplY3QzZCk7XHJcblxyXG4gIGlmICghb2JqZWN0RW50aXR5KSB7XHJcbiAgICBjb25zb2xlLndhcm4oYEFjdGlvbjogW3NldE1hdGVyaWFsXSBvYmplY3Qgd2l0aCBpZCAke29iamVjdDNkfSBpcyBub3QgYXR0YWNoZWQgdG8gbG9naWNgKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgXHJcbiAgb2JqZWN0M2QgPSBhd2FpdCBVdGlsc1NlcnZpY2UuZ2V0T2JqZWN0QnlFbnRpdHkoc2NlbmUsIGFwcCwgb2JqZWN0RW50aXR5LCBhcGlVcmwpO1xyXG5cclxuICBjb25zdCBtYXRlcmlhbEVudGl0eSA9IGxvZ2ljLm1hdGVyaWFscy5maW5kKG8gPT4gby5pZCA9PT0gbWF0ZXJpYWwpO1xyXG5cclxuICBpZiAoIW1hdGVyaWFsRW50aXR5KSB7XHJcbiAgICBjb25zb2xlLndhcm4oYEFjdGlvbjogW3NldE1hdGVyaWFsXSBtYXRlcmlhbCB3aXRoIGlkICR7bWF0ZXJpYWx9IGlzIG5vdCBhdHRhY2hlZCB0byBsb2dpY2ApO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbWF0ZXJpYWwgPSBhd2FpdCBVdGlsc1NlcnZpY2UuZ2V0TWF0ZXJpYWxCeUVudGl0eShzY2VuZSwgYXBwLCBtYXRlcmlhbEVudGl0eSwgYXBpVXJsKTtcclxuXHJcbiAgaWYgKG9iamVjdDNkICYmIG1hdGVyaWFsKSBvYmplY3QzZC5tYXRlcmlhbCA9IG1hdGVyaWFsO1xyXG59O1xyXG4iXX0=