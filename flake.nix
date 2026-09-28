{
  description = "Emotext development and CI environment";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/770938f1af42c1a7538cb55759a0666a653ada58";

  outputs = { self, nixpkgs }:
    let
      systems = [ "x86_64-linux" "aarch64-linux" ];
      forAllSystems = nixpkgs.lib.genAttrs systems;
    in {
      devShells = forAllSystems (system:
        let
          pkgs = import nixpkgs { inherit system; };
          beam = pkgs.beam29Packages;
        in {
          default = pkgs.mkShell {
            packages = [
              beam.erlang
              beam.elixir_1_20
              beam.rebar3
              pkgs.git
              pkgs.mise
              pkgs.nodejs_20
              pkgs.postgresql_16
            ];

            shellHook = ''
              export MIX_HOME="$PWD/.nix-mix"
              export HEX_HOME="$PWD/.nix-hex"
            '';
          };
        });
    };
}
