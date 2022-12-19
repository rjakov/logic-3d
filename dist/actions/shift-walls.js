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
const positions = {
    wallLPosition: null,
    wallRPosition: null
};
export const shiftWalls = (scene) => __awaiter(void 0, void 0, void 0, function* () {
    const wallLName = 'Wall_L';
    const wallRName = 'Wall_R';
    const wallLObject = UtilsService.getObjectByName(scene, wallLName);
    const wallRObject = UtilsService.getObjectByName(scene, wallRName);
    if (!wallLObject) {
        console.warn(`${wallLName} not found`);
        return;
    }
    if (!wallRObject) {
        console.warn(`${wallRName} not found`);
        return;
    }
    if (!positions.wallLPosition) {
        positions.wallLPosition = {
            x: wallLObject.position.x,
            y: wallLObject.position.y,
            z: wallLObject.position.z
        };
    }
    if (!positions.wallRPosition) {
        positions.wallRPosition = {
            x: wallRObject.position.x,
            y: wallRObject.position.y,
            z: wallRObject.position.z
        };
    }
    if (UtilsService.positionsEqual(positions.wallLPosition, wallLObject.position)) {
        wallLObject.position.x += 0.16;
    }
    else {
        wallLObject.position.x -= 0.16;
    }
    if (UtilsService.positionsEqual(positions.wallRPosition, wallRObject.position)) {
        wallRObject.position.x -= 0.16;
    }
    else {
        wallRObject.position.x += 0.16;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpZnQtd2FsbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYWN0aW9ucy9zaGlmdC13YWxscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUE7QUFFeEQsTUFBTSxTQUFTLEdBQUc7SUFDaEIsYUFBYSxFQUFFLElBQUk7SUFDbkIsYUFBYSxFQUFFLElBQUk7Q0FDcEIsQ0FBQTtBQUVELE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxDQUFNLEtBQUssRUFBQyxFQUFFO0lBQ3RDLE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQztJQUMzQixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFFM0IsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDbkUsTUFBTSxXQUFXLEdBQUcsWUFBWSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFbkUsSUFBSSxDQUFDLFdBQVcsRUFBRTtRQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsU0FBUyxZQUFZLENBQUMsQ0FBQztRQUN2QyxPQUFNO0tBQ1A7SUFFRCxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxTQUFTLFlBQVksQ0FBQyxDQUFDO1FBQ3ZDLE9BQU07S0FDUDtJQUVELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFO1FBQzVCLFNBQVMsQ0FBQyxhQUFhLEdBQUc7WUFDeEIsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN6QixDQUFDLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pCLENBQUMsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDMUIsQ0FBQztLQUNIO0lBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUU7UUFDNUIsU0FBUyxDQUFDLGFBQWEsR0FBRztZQUN4QixDQUFDLEVBQUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ3pCLENBQUMsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDekIsQ0FBQyxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQixDQUFDO0tBQ0g7SUFFRCxJQUFJLFlBQVksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDOUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0tBQ2hDO1NBQU07UUFDTCxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7S0FDaEM7SUFFRCxJQUFJLFlBQVksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDOUUsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDO0tBQ2hDO1NBQU07UUFDTCxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUM7S0FDaEM7QUFDSCxDQUFDLENBQUEsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFV0aWxzU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3V0aWxzLnNlcnZpY2UnXHJcblxyXG5jb25zdCBwb3NpdGlvbnMgPSB7XHJcbiAgd2FsbExQb3NpdGlvbjogbnVsbCxcclxuICB3YWxsUlBvc2l0aW9uOiBudWxsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaGlmdFdhbGxzID0gYXN5bmMgc2NlbmUgPT4ge1xyXG4gIGNvbnN0IHdhbGxMTmFtZSA9ICdXYWxsX0wnO1xyXG4gIGNvbnN0IHdhbGxSTmFtZSA9ICdXYWxsX1InO1xyXG5cclxuICBjb25zdCB3YWxsTE9iamVjdCA9IFV0aWxzU2VydmljZS5nZXRPYmplY3RCeU5hbWUoc2NlbmUsIHdhbGxMTmFtZSk7XHJcbiAgY29uc3Qgd2FsbFJPYmplY3QgPSBVdGlsc1NlcnZpY2UuZ2V0T2JqZWN0QnlOYW1lKHNjZW5lLCB3YWxsUk5hbWUpO1xyXG5cclxuICBpZiAoIXdhbGxMT2JqZWN0KSB7XHJcbiAgICBjb25zb2xlLndhcm4oYCR7d2FsbExOYW1lfSBub3QgZm91bmRgKTtcclxuICAgIHJldHVyblxyXG4gIH1cclxuXHJcbiAgaWYgKCF3YWxsUk9iamVjdCkge1xyXG4gICAgY29uc29sZS53YXJuKGAke3dhbGxSTmFtZX0gbm90IGZvdW5kYCk7XHJcbiAgICByZXR1cm5cclxuICB9XHJcblxyXG4gIGlmICghcG9zaXRpb25zLndhbGxMUG9zaXRpb24pIHtcclxuICAgIHBvc2l0aW9ucy53YWxsTFBvc2l0aW9uID0ge1xyXG4gICAgICB4OiB3YWxsTE9iamVjdC5wb3NpdGlvbi54LFxyXG4gICAgICB5OiB3YWxsTE9iamVjdC5wb3NpdGlvbi55LFxyXG4gICAgICB6OiB3YWxsTE9iamVjdC5wb3NpdGlvbi56XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaWYgKCFwb3NpdGlvbnMud2FsbFJQb3NpdGlvbikge1xyXG4gICAgcG9zaXRpb25zLndhbGxSUG9zaXRpb24gPSB7XHJcbiAgICAgIHg6IHdhbGxST2JqZWN0LnBvc2l0aW9uLngsXHJcbiAgICAgIHk6IHdhbGxST2JqZWN0LnBvc2l0aW9uLnksXHJcbiAgICAgIHo6IHdhbGxST2JqZWN0LnBvc2l0aW9uLnpcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpZiAoVXRpbHNTZXJ2aWNlLnBvc2l0aW9uc0VxdWFsKHBvc2l0aW9ucy53YWxsTFBvc2l0aW9uLCB3YWxsTE9iamVjdC5wb3NpdGlvbikpIHtcclxuICAgIHdhbGxMT2JqZWN0LnBvc2l0aW9uLnggKz0gMC4xNjtcclxuICB9IGVsc2Uge1xyXG4gICAgd2FsbExPYmplY3QucG9zaXRpb24ueCAtPSAwLjE2O1xyXG4gIH1cclxuXHJcbiAgaWYgKFV0aWxzU2VydmljZS5wb3NpdGlvbnNFcXVhbChwb3NpdGlvbnMud2FsbFJQb3NpdGlvbiwgd2FsbFJPYmplY3QucG9zaXRpb24pKSB7XHJcbiAgICB3YWxsUk9iamVjdC5wb3NpdGlvbi54IC09IDAuMTY7XHJcbiAgfSBlbHNlIHtcclxuICAgIHdhbGxST2JqZWN0LnBvc2l0aW9uLnggKz0gMC4xNjtcclxuICB9XHJcbn1cclxuIl19