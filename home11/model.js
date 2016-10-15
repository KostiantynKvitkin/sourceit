'use strict';
  function BaseTank(newAmmunition, newfuel){

    this._currentSpeed = 0;  //!!
    
    this._life=100;
    this._people = 0;

    this._fuel=newfuel;
    this._ammunition=newAmmunition;
    
  }

  BaseTank.prototype._MaxSpeed = 60;
  BaseTank.prototype._MinSpeed = 0;
  BaseTank.prototype._ShotSpeed = 40;
  BaseTank.prototype._MaxSpeed = 60;

  BaseTank.prototype.setSpeed_fast = function (){
    if ( this._currentSpeed < this._MaxSpeed ) { 
      this._currentSpeed++;
    }
  };

  BaseTank.prototype.setSpeed_slow = function(){
    if ( this._currentSpeed > this._MinSpeed ) {
      this._currentSpeed--;
    }
  };

  BaseTank.prototype.goShot = function(){
    if (this._currentSpeed <= this._ShotSpeed && this.ammunition > 0){
      this.ammunition--;
    }
  };

  BaseTank.prototype.getSpeed = function(){
    return this._currentSpeed;
  }; 
  

  function Tank35(newAmmunition, newfuel){
    BaseTank.call(this, newAmmunition, newfuel);
  }

  Tank35.prototype = Object.create(BaseTank.prototype); //!!!
  Tank35.prototype.constructor = Tank35;

  Tank35.prototype.goShot = function(){
    var doShot=false;
    if (this.getSpeed() === 0  && this._ammunition >= 5){
        this._ammunition = this._ammunition-5;
        doShot=true;
      }
      return doShot;
  };

  Tank35.prototype.getData=function(){
    var value = {};
    value.life = this._life;
    value.ammunition = this._ammunition;
    value.speed = this.getSpeed();
    return value;
  };

  Tank35.prototype._countGuns = 5;



  var currentTank=new Tank35(10, 50);
