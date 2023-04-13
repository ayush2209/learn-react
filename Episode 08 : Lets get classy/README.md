# Episode 05 : Class Based Compoenent.

-At the end `Class Based Component` is juts a normal javascript class.

-   And we have to inform javascript this is not a javascript class this is a React Componennt, for that we have to inherit from React.Component.

```Class Based Component Syntax
class Profile extends React.Component {
    render() {
        return (
            <div>
                <div></div>
            </div>
        );
    }
}

export default Profile;

```

## How can we create a deep nested route like `loaclhost:1234/about/profile`?

A: We have to add childer to its parent such as about component is the parent in this case.
and we need to provide `Outlet Component` in `parents component` to render their childern component.
