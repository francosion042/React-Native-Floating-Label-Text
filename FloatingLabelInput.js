class FloatingLabelInput extends Component {
  state = {
    isFocused: false
  };

  handleFocus = () => this.setState({isFocused: true});
  handleBlur = () => this.setState({isFocused: false});

  render() {
    const {label, ...props} = this.props;
    const {isFocused} = this.state;
    const labelStyle = {
      position: "absolute",
      left: 0,
      top: isFocused ? 0 : 18,
      fontSize: isFocused ? 15 : 20,
      color: isFocused ? "#000" : "#aaa"
    };
    return (
      <View style={{paddingTop: 18}}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          {...props}
          style={{
            height: 26,
            fontSize: 20,
            color: "#000",
            borderBottomWidth: 1
          }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </View>
    );
  }
}

export default FloatingLabelInput;
