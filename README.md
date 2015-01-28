# observer_pattern
Follow JavaScript design pattern(observer pattern) and implementing this pattern.

[DevNote](http://tedshd.logdown.com/posts/252556-javascript-cross-module-communication)

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

B.publish('alarm', redAlert);
```

### unPublish

`OB.unPublish(action, callback name);`

action[`string`]: cancel publish action

callback name[`var`]: it is a option if want cancel something want to do but in many actions, can point function name to cancel it

```javascript
OB.unPublish('alarm');
// or
function redAlert() {
    alert('alert');
}
OB.unPublish('', redAlert);
// or
OB.unPublish('alarm', redAlert);
```

### fire

`OB.fire(action, callback);`

action[`string`]: fire action(s) to do something

callback[`function`]: Something to do, it can handle if publish is async behavior

```javascript
OB.fire('alarm');
// or
function funcA() {
    console.log('fin');
}
OB.fire('alarm', funcA);
```
