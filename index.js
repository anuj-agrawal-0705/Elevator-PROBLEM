const chalk = require('chalk')


var floorsStatus = []
var selectedElevatorFloors = [8,6,4,7]

const callElevator = (floorNo,direction)=>{
    if(floorNo > 10 || floorNo<0){
        return console.log(chalk.red.inverse('Invalid Floor'))
    }

    const duplicateRequest = floorsStatus.find((status)=> status.floorNo === floorNo && status.direction === direction)

    if(!duplicateRequest){
        floorsStatus.push({
            floorNo,
            direction
        })
    }

    floorsStatus = floorsStatus.slice(0);
    floorsStatus.sort(function(a,b) {
        return a.floorNo - b.floorNo;
    });
    //console.log('byfloor',floorsStatus)
    
}

const destinationFloor = (floorNo)=>{
    if(floorNo > 10 || floorNo<0){
        return console.log(chalk.red.inverse('Invalid Floor'))
    }
    const duplicateFloor = selectedElevatorFloors.find((floor)=>floor === floorNo)
    if(!duplicateFloor){
        selectedElevatorFloors.push(floorNo)
        selectedElevatorFloors.sort()
    }

}

    const initialPosition = 3;
    var currentPosition = initialPosition
    var currentDirection = 'up'

const callLift = ()=>{
    while(floorsStatus.length>0){
        liftMovement()
        if(currentDirection === 'up'){
            floorsStatus.filter((floor)=>{
            if (floor.floorNo > currentPosition && floor.direction === 'down'){
                currentPosition = floor.floorNo
                //console.log('cp',currentPosition)
            }
            })
            //console.log(`Lift is at floor ${currentPosition}`)
            currentDirection = 'down'
        }

        else if(currentDirection === 'down'){
            floorsStatus.filter((floor)=>{
            if (floor.floorNo < currentPosition && floor.direction === 'up'){
                currentPosition = floor.floorNo
            }
            })
            //console.log(`LiftD is at floor ${currentPosition}`)
            currentDirection = 'up'
        }
    }

    
}

const liftMovement = ()=>{
    var dest = []
    
        
        if(currentDirection === 'up'){
        floorsStatus = floorsStatus.filter((floor)=>{

                if(floor.floorNo>=currentPosition && floor.direction === 'up'){
                    dest.push(floor.floorNo)
                }
                    return floor.floorNo<currentPosition || floor.direction === 'down'
                })
                //console.log('akdc',floorsStatus)

        selectedElevatorFloors = selectedElevatorFloors.filter((floor)=> {
                const duplicateRequest = dest.find((status)=> status === floor)
                if(floor >= currentPosition && !duplicateRequest){
                    dest.push(floor)
                }
                    return floor < currentPosition
            })
            //console.log(selectedElevatorFloors)
            dest.sort(function(a, b){
                return a - b;
            });
            if(dest.length>0){
                dest = dest.filter((floor)=>{
                    
                    currentPosition = floor
                    console.log(`Lift is at floor ${currentPosition} going ${currentDirection}`) 
                    return !floor
                })
            }

            //currentDirection = 'down'
        }

        else if(currentDirection === 'down'){
        floorsStatus = floorsStatus.filter((floor)=>{
                if(floor.floorNo<=currentPosition && floor.direction === 'down')
                    dest.push(floor.floorNo)
                    return floor.floorNo>currentPosition || floor.direction === 'up'
                })
                //console.log(floorsStatus)

        selectedElevatorFloors = selectedElevatorFloors.filter((floor)=> {
                const duplicateRequest = dest.find((status)=> status === floor)
                if(floor <= currentPosition && !duplicateRequest)
                    dest.push(floor)
                    return floor > currentPosition
            })
            dest.sort(function(a, b){
                return a - b;
            });
            
            dest.reverse()
            
            if(dest.length>0){
            dest = dest.filter((floor)=>{
                    
                    currentPosition = floor
                    console.log(`Lift is at floor ${currentPosition} going ${currentDirection}`) 
                    return !floor
                })
            }

            //currentDirection = 'up'
        }

}





// callElevator(9,'up')
// callElevator(5,'down')
// callElevator(2,'up')
// callElevator(10,'down')
// destinationFloor(8)
// // console.log(selectedElevatorFloorsloors)
// console.log(callLift(floorsStatus, selectedElevatorFloors))