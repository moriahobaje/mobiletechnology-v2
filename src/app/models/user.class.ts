export class User 
{
  private email?: string = '';
  private password?: string = '';
  private passwordConfirm?: string = '';
  private firstName?: string = '';
  private lastName?: string = '';
  private address?: string = '';
  private role?: string = '';
  private enabled?: boolean = true;

  public isAdmin(): boolean {
    return this.role === 'admin';
  }

  public clear() {
    this.Email = '';
    this.clearPassword();
    this.clearNames();
  }

  public clearPassword() {
    this.Password = '';
    this.PasswordConfirm = '';
  }

  public clearNames() {
    this.FirstName = '';
    this.LastName = '';
  }

  public passwordsMatch(): boolean {
    return this.Password === this.PasswordConfirm;
  }

  get Name() {
    // return this.firstName + ' ' + this.lastName;
    return `${this.firstName} ${this.lastName}`;
  }

  set FirstName(value: string) {
    if (!value) {
      this.firstName = value;
      return;
    }

    let name = value.toLocaleLowerCase();
    name = name[0].toLocaleUpperCase() + name.substr(1);

    this.firstName = name;
  }

  get FirstName() {
    return this.firstName;
  }

  set LastName(value: string) {
    if (!value) {
      this.lastName = value;
      return;
    }

    let name = value.toLocaleLowerCase();
    name = name[0].toLocaleUpperCase() + name.substr(1);

    this.lastName = name;

    this.lastName = value;
  }

  get LastName() {
    return this.lastName;
  }

  set Email(value: string) {
    this.email = value;
  }

  get Email() {
    return this.email;
  }

  set Password(value: string) {
    this.password = value;
  }

  get Password() {
    return this.password;
  }

  set PasswordConfirm(value: string) {
    this.passwordConfirm = value;
  }

  get PasswordConfirm() {
    return this.passwordConfirm;
  }

  get Address() {
    return this.address;
  }

  set Address(value) {
    this.address = value;
  }

  get Role() {
    return this.role;
  }

  set Role(value) {
    this.role = value;
  }

  get Enabled() {
    return this.enabled;
  }

  set Enabled(value) {
    this.enabled = value;
  }

  toString() {
    return `Name: ${this.Name} (${this.Email}) - Role: ${this.Role}`;
  }
}