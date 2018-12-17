import bcrypt from "bcrypt";

export default class User {
    public Id: number;
    public CreatedAt: Date;
    public LastSeenAt: Date;
    public RegisteredAt?: Date;
    public HasRegistered: boolean;
    public Email: string;
    public Password: string;
    public Language: string;
    public FacebookUserId: string;
    public FacebookUserAccessToken: string;
    public GoogleUserId: string;
    public GoogleUserIdToken: string;
    public FirstName: string;

    // [Computed]
    public get FullDisplayName(): string {
      return this.FirstName ? `${this.FirstName} (${this.Email})` : this.Email;
    }

    public async SetPassword(password: string): Promise<void> {
        this.Password = await bcrypt.hash(password, 5);
    }

    public async VerifyPassword(password: string): Promise<boolean> {
        // password might be null, like if they used facebook to sign in.
        if (!this.Password) {
            return false;
        }

        return await bcrypt.compare(password, this.Password);
    }

    public Register(email: string, password: string): void {
        if (!email || !password) {
            throw new Error("Can't complete registration with a null email or password.");
        }

        this.Email = email;
        this.SetPassword(password);
        this.HasRegistered = true;
    }

    public RegisterWithGoogle(email: string, googleId: string, googleIdToken: string, firstName: string): void {
        if ((!email || !firstName) || !googleId || !googleIdToken) {
            throw new Error("Can't complete registration with a null email or google id.");
        }

        this.Email = email;
        this.GoogleUserId = googleId;
        this.GoogleUserIdToken = googleIdToken;
        this.FirstName = firstName;
        this.HasRegistered = true;
    }
}
