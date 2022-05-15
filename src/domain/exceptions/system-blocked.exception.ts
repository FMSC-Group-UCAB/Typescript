class SystemBlockedException extends Error {
    constructor(m: string) {
        super(m);
    }

    public static create(): SystemBlockedException {
        return new SystemBlockedException("El sistema está bloqueado para usted por mal uso.")
    }
}