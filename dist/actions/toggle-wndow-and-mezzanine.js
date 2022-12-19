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
export const toggleWindowAndMezzanine = (scene) => __awaiter(void 0, void 0, void 0, function* () {
    const windowAndMezzanineGroupName = 'Window_and_Mezzanine_grp';
    const interiorWallLinersNOWindowsName = 'Interior_Wall_Liners_NOWindows';
    const windowAndMezzanineGroup = UtilsService.getObjectByName(scene, windowAndMezzanineGroupName);
    const interiorWallLinersNOWindows = UtilsService.getObjectByName(scene, interiorWallLinersNOWindowsName);
    if (!windowAndMezzanineGroup) {
        console.warn(`${windowAndMezzanineGroupName} not found`);
        return;
    }
    if (!interiorWallLinersNOWindows) {
        console.warn(`${interiorWallLinersNOWindowsName} not found`);
        return;
    }
    if (windowAndMezzanineGroup.visible) {
        windowAndMezzanineGroup.visible = false;
        interiorWallLinersNOWindows.visible = true;
    }
    else {
        windowAndMezzanineGroup.visible = true;
        interiorWallLinersNOWindows.visible = false;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9nZ2xlLXduZG93LWFuZC1tZXp6YW5pbmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWN0aW9ucy90b2dnbGUtd25kb3ctYW5kLW1lenphbmluZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFFeEQsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUcsQ0FBTSxLQUFLLEVBQUMsRUFBRTtJQUNwRCxNQUFNLDJCQUEyQixHQUFHLDBCQUEwQixDQUFBO0lBQzlELE1BQU0sK0JBQStCLEdBQUcsZ0NBQWdDLENBQUE7SUFFeEUsTUFBTSx1QkFBdUIsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUMxRCxLQUFLLEVBQ0wsMkJBQTJCLENBQzVCLENBQUE7SUFDRCxNQUFNLDJCQUEyQixHQUFHLFlBQVksQ0FBQyxlQUFlLENBQzlELEtBQUssRUFDTCwrQkFBK0IsQ0FDaEMsQ0FBQTtJQUVELElBQUksQ0FBQyx1QkFBdUIsRUFBRTtRQUM1QixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsMkJBQTJCLFlBQVksQ0FBQyxDQUFBO1FBQ3hELE9BQU07S0FDUDtJQUVELElBQUksQ0FBQywyQkFBMkIsRUFBRTtRQUNoQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsK0JBQStCLFlBQVksQ0FBQyxDQUFBO1FBQzVELE9BQU07S0FDUDtJQUVELElBQUksdUJBQXVCLENBQUMsT0FBTyxFQUFFO1FBQ25DLHVCQUF1QixDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDdkMsMkJBQTJCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtLQUMzQztTQUFNO1FBQ0wsdUJBQXVCLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtRQUN0QywyQkFBMkIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO0tBQzVDO0FBQ0gsQ0FBQyxDQUFBLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVdGlsc1NlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91dGlscy5zZXJ2aWNlJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvZ2dsZVdpbmRvd0FuZE1lenphbmluZSA9IGFzeW5jIHNjZW5lID0+IHtcclxuICBjb25zdCB3aW5kb3dBbmRNZXp6YW5pbmVHcm91cE5hbWUgPSAnV2luZG93X2FuZF9NZXp6YW5pbmVfZ3JwJ1xyXG4gIGNvbnN0IGludGVyaW9yV2FsbExpbmVyc05PV2luZG93c05hbWUgPSAnSW50ZXJpb3JfV2FsbF9MaW5lcnNfTk9XaW5kb3dzJ1xyXG5cclxuICBjb25zdCB3aW5kb3dBbmRNZXp6YW5pbmVHcm91cCA9IFV0aWxzU2VydmljZS5nZXRPYmplY3RCeU5hbWUoXHJcbiAgICBzY2VuZSxcclxuICAgIHdpbmRvd0FuZE1lenphbmluZUdyb3VwTmFtZVxyXG4gIClcclxuICBjb25zdCBpbnRlcmlvcldhbGxMaW5lcnNOT1dpbmRvd3MgPSBVdGlsc1NlcnZpY2UuZ2V0T2JqZWN0QnlOYW1lKFxyXG4gICAgc2NlbmUsXHJcbiAgICBpbnRlcmlvcldhbGxMaW5lcnNOT1dpbmRvd3NOYW1lXHJcbiAgKVxyXG5cclxuICBpZiAoIXdpbmRvd0FuZE1lenphbmluZUdyb3VwKSB7XHJcbiAgICBjb25zb2xlLndhcm4oYCR7d2luZG93QW5kTWV6emFuaW5lR3JvdXBOYW1lfSBub3QgZm91bmRgKVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG5cclxuICBpZiAoIWludGVyaW9yV2FsbExpbmVyc05PV2luZG93cykge1xyXG4gICAgY29uc29sZS53YXJuKGAke2ludGVyaW9yV2FsbExpbmVyc05PV2luZG93c05hbWV9IG5vdCBmb3VuZGApXHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGlmICh3aW5kb3dBbmRNZXp6YW5pbmVHcm91cC52aXNpYmxlKSB7XHJcbiAgICB3aW5kb3dBbmRNZXp6YW5pbmVHcm91cC52aXNpYmxlID0gZmFsc2VcclxuICAgIGludGVyaW9yV2FsbExpbmVyc05PV2luZG93cy52aXNpYmxlID0gdHJ1ZVxyXG4gIH0gZWxzZSB7XHJcbiAgICB3aW5kb3dBbmRNZXp6YW5pbmVHcm91cC52aXNpYmxlID0gdHJ1ZVxyXG4gICAgaW50ZXJpb3JXYWxsTGluZXJzTk9XaW5kb3dzLnZpc2libGUgPSBmYWxzZVxyXG4gIH1cclxufVxyXG4iXX0=