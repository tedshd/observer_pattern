# observer_pattern
Follow JavaScript design pattern(observer pattern) and implementing this pattern.

## Intro

This is min function observer pattern implementing

`hub` is a array tmp actions

`publish` include a action and something want to do and publish to `hub` provide subscribe

`unpublish` can cancel published action or something want to do

`fire` is function trigger action, it is like subscribe in observer pattern

## Usage

### publish

`OB.publish(action, callback);`

action[`string`]: action for fire, it is not unique

callback[`function`]: Something to do

```javascript
function redAlert() {
    alert('RED ALERT');
}

OB.publish('alarm', redAlert);
```

### unPublish

`OB.unPublish(action, callback name);`

action[`string`]: cancel publish action

callback name[`var`]: it is a option if want cancel something want to do but in many actions, can point function name to cancel it

```javascript
OB.unPublish('alarm');
// or
OB.unPublish('', redAlert);
```

### fire

`OB.fire(action);`

action[`string`]: fire action(s) to do something

```javascript
OB.fire('alarm');
```
