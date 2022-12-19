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
let envMap = null;
const setEnvMap = scene => {
    scene.traverse(c => {
        if (c && c.material && c.material.envMap && !envMap)
            envMap = c.material.envMap;
    });
};
const updateEnvMap = (scene, loadedScene) => {
    if (!envMap)
        setEnvMap(scene);
    loadedScene.traverse(c => {
        if (c && c.material) {
            c.material.envMap = envMap;
            c.material.needsUpdate = true;
        }
    });
};
export const toggleObjectsVisibility = (scene, app, menuLogicObject, apiUrl) => __awaiter(void 0, void 0, void 0, function* () {
    const object3ds = yield UtilsService.getObjectsByEntityInScene(scene, menuLogicObject);
    if (object3ds.length) {
        object3ds.forEach(object3d => {
            if (object3d) {
                if (object3d.visible) {
                    object3d.visible = false;
                }
                else {
                    object3d.visible = true;
                }
            }
        });
    }
    else {
        yield UtilsService.getObjectsByEntityInFromAsset(scene, app, menuLogicObject, apiUrl);
        const object3ds = yield UtilsService.getObjectsByEntityInScene(scene, menuLogicObject);
        if (object3ds.length) {
            object3ds.forEach(object3d => {
                updateEnvMap(scene, object3d);
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLW9iamVjdHMtdmlzaWJpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL3RvZ2dsZS1vYmplY3RzLXZpc2liaWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBRXhELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztBQUVsQixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBRTtJQUN4QixLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU07WUFBRSxNQUFNLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDcEYsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUE7QUFFRCxNQUFNLFlBQVksR0FBRyxDQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsRUFBRTtJQUMxQyxJQUFJLENBQUMsTUFBTTtRQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDbkIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFBO1lBQzFCLENBQUMsQ0FBQyxRQUFRLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztTQUMvQjtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBRUQsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUcsQ0FDckMsS0FBSyxFQUNMLEdBQUcsRUFDSCxlQUFlLEVBQ2YsTUFBTSxFQUNOLEVBQUU7SUFDRixNQUFNLFNBQVMsR0FBRyxNQUNOLFlBQVksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUN2RSxDQUFBO0lBRUYsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1FBQ3BCLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDM0IsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO29CQUNwQixRQUFRLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtpQkFDekI7cUJBQU07b0JBQ0wsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7aUJBQ3hCO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQTtLQUNIO1NBQU07UUFDTCxNQUFNLFlBQVksQ0FBQyw2QkFBNkIsQ0FDOUMsS0FBSyxFQUNMLEdBQUcsRUFDSCxlQUFlLEVBQ2YsTUFBTSxDQUNQLENBQUM7UUFDRixNQUFNLFNBQVMsR0FBRyxNQUNOLFlBQVksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUN2RSxDQUFDO1FBQ0gsSUFBSSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3BCLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzNCLFlBQVksQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUE7U0FDSDtLQUNGO0FBQ0gsQ0FBQyxDQUFBLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlJ1xyXG5cclxubGV0IGVudk1hcCA9IG51bGw7XHJcblxyXG5jb25zdCBzZXRFbnZNYXAgPSBzY2VuZSA9PiB7XHJcbiAgc2NlbmUudHJhdmVyc2UoYyA9PiB7XHJcbiAgICAgIGlmIChjICYmIGMubWF0ZXJpYWwgJiYgYy5tYXRlcmlhbC5lbnZNYXAgJiYgIWVudk1hcCkgZW52TWFwID0gYy5tYXRlcmlhbC5lbnZNYXA7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IHVwZGF0ZUVudk1hcCA9IChzY2VuZSwgbG9hZGVkU2NlbmUpID0+IHtcclxuICBpZiAoIWVudk1hcCkgc2V0RW52TWFwKHNjZW5lKTtcclxuICBsb2FkZWRTY2VuZS50cmF2ZXJzZShjID0+IHtcclxuICAgIGlmIChjICYmIGMubWF0ZXJpYWwpIHtcclxuICAgICAgYy5tYXRlcmlhbC5lbnZNYXAgPSBlbnZNYXBcclxuICAgICAgYy5tYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZU9iamVjdHNWaXNpYmlsaXR5ID0gYXN5bmMgKFxyXG4gIHNjZW5lLFxyXG4gIGFwcCxcclxuICBtZW51TG9naWNPYmplY3QsXHJcbiAgYXBpVXJsXHJcbikgPT4ge1xyXG4gIGNvbnN0IG9iamVjdDNkcyA9IGF3YWl0ICg8YW55W10+KFxyXG4gICAgKDx1bmtub3duPlV0aWxzU2VydmljZS5nZXRPYmplY3RzQnlFbnRpdHlJblNjZW5lKHNjZW5lLCBtZW51TG9naWNPYmplY3QpKVxyXG4gICkpXHJcblxyXG4gIGlmIChvYmplY3QzZHMubGVuZ3RoKSB7XHJcbiAgICBvYmplY3QzZHMuZm9yRWFjaChvYmplY3QzZCA9PiB7XHJcbiAgICAgIGlmIChvYmplY3QzZCkge1xyXG4gICAgICAgIGlmIChvYmplY3QzZC52aXNpYmxlKSB7XHJcbiAgICAgICAgICBvYmplY3QzZC52aXNpYmxlID0gZmFsc2VcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgb2JqZWN0M2QudmlzaWJsZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfSBlbHNlIHtcclxuICAgIGF3YWl0IFV0aWxzU2VydmljZS5nZXRPYmplY3RzQnlFbnRpdHlJbkZyb21Bc3NldChcclxuICAgICAgc2NlbmUsXHJcbiAgICAgIGFwcCxcclxuICAgICAgbWVudUxvZ2ljT2JqZWN0LFxyXG4gICAgICBhcGlVcmxcclxuICAgICk7XHJcbiAgICBjb25zdCBvYmplY3QzZHMgPSBhd2FpdCAoPGFueVtdPihcclxuICAgICAgKDx1bmtub3duPlV0aWxzU2VydmljZS5nZXRPYmplY3RzQnlFbnRpdHlJblNjZW5lKHNjZW5lLCBtZW51TG9naWNPYmplY3QpKVxyXG4gICAgKSk7XHJcbiAgICBpZiAob2JqZWN0M2RzLmxlbmd0aCkge1xyXG4gICAgICBvYmplY3QzZHMuZm9yRWFjaChvYmplY3QzZCA9PiB7XHJcbiAgICAgICAgdXBkYXRlRW52TWFwKHNjZW5lLCBvYmplY3QzZCk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==