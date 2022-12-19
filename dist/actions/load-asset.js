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
export const loadAsset = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const { app, apiUrl, logic, scene } = args;
    if (logic.asset) {
        const url = UtilsService.getMainAsset(logic.asset.assetUrls);
        const loadedScene = yield UtilsService.loadScene(app, `${apiUrl}${url}`);
        scene.add(loadedScene);
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZC1hc3NldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hY3Rpb25zL2xvYWQtYXNzZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBYSxDQUFPLElBQTRCLEVBQUUsRUFBRTtJQUN4RSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDO0lBQzNDLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtRQUNmLE1BQU0sR0FBRyxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3RCxNQUFNLFdBQVcsR0FBRyxNQUFZLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFFLENBQUM7UUFDaEYsS0FBSyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztLQUN4QjtBQUNILENBQUMsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uRm4gfSBmcm9tICcuLi9tb2RlbC9hY3Rpb24tZm4nO1xyXG5pbXBvcnQgeyBFeGVjdXRlQWN0aW9uQXJndW1lbnRzIH0gZnJvbSAnLi4vbW9kZWwvZXhlY3V0ZS1hY3Rpb24tYXJndW1lbnRzJztcclxuaW1wb3J0IHsgVXRpbHNTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvdXRpbHMuc2VydmljZSc7XHJcblxyXG5leHBvcnQgY29uc3QgbG9hZEFzc2V0OiBBY3Rpb25GbiA9IGFzeW5jIChhcmdzOiBFeGVjdXRlQWN0aW9uQXJndW1lbnRzKSA9PiB7XHJcbiAgY29uc3QgeyBhcHAsIGFwaVVybCwgbG9naWMsIHNjZW5lIH0gPSBhcmdzO1xyXG4gIGlmIChsb2dpYy5hc3NldCkge1xyXG4gICAgY29uc3QgdXJsID0gVXRpbHNTZXJ2aWNlLmdldE1haW5Bc3NldChsb2dpYy5hc3NldC5hc3NldFVybHMpO1xyXG4gICAgY29uc3QgbG9hZGVkU2NlbmUgPSBhd2FpdCAoPGFueT5VdGlsc1NlcnZpY2UubG9hZFNjZW5lKGFwcCwgYCR7YXBpVXJsfSR7dXJsfWApKTtcclxuICAgIHNjZW5lLmFkZChsb2FkZWRTY2VuZSk7XHJcbiAgfVxyXG59O1xyXG4iXX0=